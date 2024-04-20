



const express = require("express");
const connectDB = require("./mongoose.js");
const userRouter = require("./route/route.js");

const app = express()

app.use(express.json());


connectDB().then(() => {
    app.use("/", userRouter);
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((error) => {
    console.error("Error:", error);
});
