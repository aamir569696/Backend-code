import express from "express";
import morgan from "morgan";
import cors from "cors";


const app = express();



app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the backend!" });
});

app.get("/app/data", (req, res) => {
    res.status(200).json({ message: "App Data" });
});

app.get("/api/user",(req,res)=>{
    const users=
         [ { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },]
    
    res.status(200).json( users );
});

export default app;