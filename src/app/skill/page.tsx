// app/components/Skill.tsx
'use client';

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // client yahan import karo
// Update the import path below to the actual location of your Post type definition
// import type { Post } from '@/'; // Ensure this path is correct
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';


export default function Skill() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "post"] | order(updatedAt desc){
        title,
        slug,
        image,
        content
      }`;
      const result = await client.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
    <div className='grid grid-cols-3 flex flex-nowrap mt-48  justify-center items-center '>
      {data.map((item) =>(
        <div key={item.slug.current}>
          <div className='max-w-[400px]  mx-auto p-4 bg-black shadow-md rounded-b-4xl mb-6 '>
          {item.image && (
            <Image
              src={urlFor(item.image).url()}
              alt={item.title}
              width={500}
              height={300}
              className="mb-4"
            />
          )}
           <h2 className="text-2xl font-bold mb-4 text-gray-300 ">{item.title}</h2>
          <p className="text-white mb-4">{item.content}</p>
          <a href={`/skill/${item.slug.current}`} className="text-blue-500 hover:underline">
            Read more
          </a>

</div>
      </div>

        ))}


      
</div>

    
    </>
  );
}

