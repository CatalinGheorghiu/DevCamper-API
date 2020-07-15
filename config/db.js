const mongoose = require("mongoose");

const connectDb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

    console.log(
        `MongoDB Connected:${conn.connection.host}`.cyan.underline.bold
    );
};

module.exports = connectDb;
