import mongoose from "mongoose";


const ConnectDb = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected Sucessfully")
    }
    catch (err) {
        console.log("Error while connecting to Database", err);

    }
}

export default ConnectDb;