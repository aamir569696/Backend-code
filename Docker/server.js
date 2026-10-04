import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Imran Khan" });
});

app.get("/app/data",(req,res)=>{
    const data={
        id:1,
        fullname:"Amir Khan",
        description:"I am a inshallah future pro level devloper"
    }

    res.status(200).json(data)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});