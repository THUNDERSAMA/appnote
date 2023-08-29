import mongoose from "mongoose";


// Creating a MongoClient with a MongoClientOptions object to set the Stable API version
const connectMongodb=async()=> {
  try {
    const uri:string=process.env.MONGODB_URI!;
  await mongoose.connect(uri);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  catch(error){
    console.log(error);
  }
}
export default connectMongodb;