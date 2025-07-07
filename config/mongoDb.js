const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("Database is connected");
    })
    .catch((err) => {
      console.log("Database connection error");
    });
};

module.exports = connectDB;
