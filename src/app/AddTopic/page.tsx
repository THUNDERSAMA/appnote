"use client";
import { useRouter } from "next/navigation";
import {  useState } from "react";




export default function AddTopic(){
    
//console.log("hello");
const router=useRouter();
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
    const handleSubmit=async (e: { preventDefault: () => void; })=>{
        e.preventDefault()
       
     try {
        const response = await fetch('/api/topics', {
            method: 'POST',
            headers:{
                'Accept': 'text/plain, */*',
                "Content-type":"application/json"
            },
            body:JSON.stringify({title,description}),
          }) ;
         if(response.ok){
            router.refresh();
            router.push("/")
            
         }
         else{
            throw new Error("FAILED");
         }
     } catch (error) {
        console.log(error);
     }
        ;
    }
    return (
        <>
        <div className="flex flex-col justify-center items-center h-[100vh]">
           <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] bg-white undefined">
                 
                 <div className="relative flex flex-row justify-between">
                     <h4 className="text-xl font-bold text-navy-700 dark:text-white mb-3">
                         Create Topic
                     </h4>
                 </div>
                 <form onSubmit={handleSubmit}>
                 <div className="mb-3">
                     <label  className="text-sm text-navy-700  font-bold">Title</label>
                     <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} name="title" placeholder="@Title" className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200" />
                 </div>
                 <div className="mb-3">
                     <label  className="text-sm text-navy-700  font-bold">Description</label>
                     <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} name="description" placeholder="@Description" className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"/>
                 </div>
                 <div className="mb-3">
                 <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Submit</button>
                 </div>
                 </form>
                 </div>
                 </div>
        </>

    );
}