require('dotenv').config()
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const uri = process.env.MONGO_URL;

const connnectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('MongoDB Connected', conn.connection.host)

    } catch (error) {
        console.log(error.message, "error")
    }
}
module.exports = connnectDB;