import mongoose, { Schema } from "mongoose";

const UserSchema=new Schema({
    title:String,
    description:String,
    
});
const UserModel=mongoose.models.usermodel || mongoose.model("usermodel",UserSchema);

export default UserModel;