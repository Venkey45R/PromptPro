import mongoose from "mongoose";

let isConnected = false;

export const  ConnectToDB = async() =>{
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("Mongo DB is already connected")
        return
    }
    else{
        try {
            await mongoose.connect(process.env.MONGODB_URI,{dbName: "sharePrompts", useNewUrlParser: true, useUnifiedTopology: true,})
            isConnected = true;
            console.log("Mongo DB connected");
        } catch (error) {
            console.log(error);
        }
    }
}