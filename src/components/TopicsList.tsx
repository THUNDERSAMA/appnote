"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList() {
  const [topics, setTopics] = useState<{ title: string,description:string,_id:string }[]>([]); // Initialize topics state as an empty array

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/topics', {
          cache: 'no-store',
        });
        const fetchedTopics = await res.json();
        console.log(JSON.stringify(fetchedTopics) + " from 42");
        setTopics(fetchedTopics.topics); // Set the fetched topics in state
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    }

    fetchData();
  }, []);
 console.log(topics);
  if (!Array.isArray(topics)) {
   
    return <div>loading</div>; // or any loading indicator
  }

  return (
    <>
      {topics.map((t) => (
        <div
          className="p-4 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 my-3 flex justify-between gap-5 items-start rounded-lg"
          key={t._id}
        >
          <div>
            <h2 className="font-bold text-2xl text-white">{t.title}</h2>
            <div className="text-white">{t.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={'/editTopic/' + t._id} className="text-white">
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
