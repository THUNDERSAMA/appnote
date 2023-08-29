"use client"
import EditTopic from "@/components/EditTopic";

const getTopicById =async (id:any)=>{
  console.log(id);
    try {
      const res = await fetch(`/api/topics/${id}`,{
        cache:"no-store",
      });
      //console.log(res);
      if(!res.ok)
      {
        throw new Error("failed")
      }
      console.log(res.json);
      return res.json();
    } catch (error) {
      console.log("error",error);
    }
  }
 export default async function editTopic({params}:any)
 {
  console.log(params);
 const {id}=params;
  console.log(id);
  if(id==null)
  {
    return (<div>error</div>);
  }
    
    const{topic}=await getTopicById(id);
    const {title,description}=topic;
    console.log(id);
     return (<><EditTopic id={id} title={title} description={description}></EditTopic></>);
 }
