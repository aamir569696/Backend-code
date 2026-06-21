const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

  async function registerController(req, res) {
  const { username, email, password, bio, profileimage } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message:
        "user already exist" +
        (isUserAlreadyExist.email == email
          ? "email is already exist"
          : "username already exist"),
    });
  }
  const hash = crypto.createHash("sha256").update(password).digest("hex");
  const user = await userModel.create({
    email,
    password: hash,
    username,
    bio,
    profileimage,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    "c16bba9c89a8a4a64b4ebfe2673056448de3babb28b81b4f5b7d01c7367a1326",
    { expiresIn: "1d" },
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "user register succesfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileimage: user.profileimage,
    },
  });
}

async function loginController(req,res){
    const {email,password,username}=req.body;

    const user=await userModel.findOne({
        $or:[
            {username:username},
            {email:email}
        ]
    })

    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }

    const hash=crypto.createHash("sha256").update(password).digest('hex')

   const isValidPassword= hash==user.password

   if(!isValidPassword){
    return res.status(401).json({
        message:"password invalid"
    })
   }

   const token= jwt.sign({
    id:user._id
   } , "c16bba9c89a8a4a64b4ebfe2673056448de3babb28b81b4f5b7d01c7367a1326" ,{expiresIn:"1d"})
     res.status(200).json({
        message:"user login succesfully",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileimage:user.profileimage
        }
     })
}


module.exports={
    registerController,
    loginController
}