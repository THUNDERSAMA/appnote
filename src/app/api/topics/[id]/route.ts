import { NextResponse } from "next/server";
import connectMongodb from "../../../../../libs/mongodb";
import UserModel from "../../../../../models/topic";

export async function PUT(request:any,{params}:any) {
    const {id}=params;
    const{newTitle:title,newDescription:description}=await request.json()
    await connectMongodb
    await UserModel.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Topic updated"},{status:201});

}
export async function GET(request:any,{params}:any) {
    const {id}=params;
    await connectMongodb
    const topic = await UserModel.findOne({_id:id});
    return NextResponse.json({topic},{status:201});

}
