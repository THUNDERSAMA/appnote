import Link from "next/link"
export default function Navbar(){
    return(
        <nav className="flex justify-between items-center
        bg-slate-800 px-8 py-4 rounded-lg" >
            <Link className="text-white font-bold" href={"/"}>RandomTopics</Link>
            <Link className="bg-white p-2 rounded-lg font-bold"href={"/AddTopic"}>Add</Link>
        </nav>
    )
}