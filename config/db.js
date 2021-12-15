const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            //No more support options from Mongoose 6 - they are default
           /* useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false*/
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;