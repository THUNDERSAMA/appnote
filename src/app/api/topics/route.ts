 /* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongodb from '../../../../libs/mongodb';
import UserModel from '../../../../models/topic';
import { NextResponse } from 'next/server';
//import connectMongodb from '../../../libs/mongodb'
 
(async() => {
    await connectMongodb();
})();
export  async function POST(request:any)
 {
  
 //console.log(request);
 try {
   const {title,description}=await request.json();
  await UserModel.create({title,description});
  return NextResponse.json({message:"Topic created"},{status:201});
 } catch (error) {
  
 }
 
 
}


export  async function GET() {
    
   // console.log("get");
    const topics=await UserModel.find();
    return NextResponse.json({topics});
   
  }
  export  async function DELETE(request:any) {
  
    // console.log(request);
    const id=request.nextUrl.searchParams.get("id");
     await UserModel.findByIdAndDelete(id);
     return NextResponse.json({message:"Topic deleted"},{status:201});
    
   }