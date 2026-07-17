const userModle = require("../modle/User.modle");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isAlreadyRegister = await userModle.findOne({
    $or: [{ username }, { email }],
  });
  if (isAlreadyRegister) {
    return res.status(401).json({
      message: "user is already exist with same email and username",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModle.create({
    username,
    email,
    passsword: hash,
  });

  const token = jwt.sign(
    {
      user: user._id,
      user: user.username,
    },
    process.env.JWT_SCRET,
    { expiresIn: "3d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user register successfully",

    user:{
        id:user._id,
        username:user.username,
        email:user.email,
        
    }
  });
}

async function loginController(req,res) {
    const {username,passsword,email}=req.body

    const user=await userModle.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(!user){
        return res.status(404).json({
            message:"invalid credential"
        })
    }

   const isPasswordValid=await bcrypt.compare(password,user.password);
   if(isPasswordValid){
    return res.status(400).json({
      message:"invalid Credentials"
    })

  const token=  jwt.sign({
      id:user._id,
     username: user.username
    },process.env.JWT_SCRET,{expiresIn:'3d'})

    res.cookie('token',token)

    res.status(201).json({
      message:'user login successfully',
      user:{
        username:user.username,
        email:user.email,
        id:user._id
      }
    })

   }




}
module.exports = {
  registerController,
};
