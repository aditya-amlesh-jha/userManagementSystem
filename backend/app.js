const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./route/userRouter");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// connect to mongodb
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
).then(()=>{
    console.log("Connected to MongoDB");
}
).catch((err)=>{
    console.log(err);
}
)

app.use("/api",userRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}
)



