import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL =process.env.MONGODB_URI
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true , useFindAndModify : false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;