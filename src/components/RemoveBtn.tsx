"use client";
import { useRouter } from "next/navigation";
import {HiOutlineTrash} from "react-icons/hi"
export default function RemoveBtn({id}:any)
{
    const router=useRouter();
    const removeTopic=async()=>{
        const c=confirm('are you sure');
        if(c){
           const res= await fetch(`/api/topics?id=${id}`,{
                method:"DELETE",
            });
            if(res.ok)
            router.refresh();
        }
    }
    return (
        <button className="text-white" onClick={removeTopic}>
            <HiOutlineTrash size={24} />
        </button>
    );
}