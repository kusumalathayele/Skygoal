
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/skygoal")
        console.log("Connected to MongoDB");
        return con;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

module.exports = connectDB;
