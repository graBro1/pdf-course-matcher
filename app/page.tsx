'use client'

import { compare } from "@/actions/actions";
import React, { useActionState } from 'react'


export default function Home() {

  const [data, action, isPending] = useActionState(compare, undefined)
  

  function scoreColor(score: number) {
    if (score >= 0.8) {
      return "text-cyan-400"
    } else if (score >=0.65) {
      return "text-green-500"
    } else if (score >= 0.5) {
      return "text-yellow-300"
    }
  }



  return (
    <main>
      <div className="h-screen p-2">
        <>
          <form action={action} className="mx-auto p-4">
            <span className="text-center block font-bold text-gray-400 p-2">Enter Course Information</span>
            <div className="flex flex-col items-center">
              <input 
              type="text" 
              id="courseName" 
              name="name"
              autoComplete="off"
              className="p-3 rounded-lg bg-gray-900 m-2 h-10 w-200 min-w-3/7 max-w-[85%] border-gray-800 border focus:border-gray-700 focus:outline-none" 
              placeholder="Enter Course Name"
              />
              <textarea 
              id="courseDescription"
              name="description"
              className="p-3 rounded-lg bg-gray-900 m-2 h-50 w-200 min-w-3/7 max-w-[85%] border border-gray-800 focus:border-gray-700 focus:outline-none resize-none" 
              placeholder="Enter Course Description"
              ></textarea>
            </div>
            <div className="mx-auto p-4 flex flex-col items-center">
              <span className="text-center font-bold text-gray-400 p-2">Upload Course Catalog</span>
              <input 
              type="file" 
              id="courseCatalog"
              name="catalog" 
              accept=".pdf" 
              className="block border border-gray-700 rounded-lg m-2 w-75 max-w-[85%] file:bg-gray-700 file:px-3 file:py-2 file:me-3 file:cursor-pointer file:hover:bg-gray-800"
              />
            </div>
            <button 
            type="submit" 
            disabled={isPending}
            className="px-5 py-1.5 m-2 rounded-lg bg-gray-800 mx-auto block text-center cursor-pointer border-gray-700 hover:bg-gray-900 border text-lg font-bold"
            >Submit</button>
            {data && 
            <div className="m-2">
              <div className="p-2">
                <span className="text-center block font-bold text-lg text-gray-300 p-2">Results</span>
                <span className="text-center block mx-auto text-lg font-bold text-gray-300">
                  Closest Match: <span className="text-gray-400">{data[0]?.course.course_name}</span>
                </span>
                <span className="text-center block mx-auto text-lg font-bold text-gray-300">
                  Confidence Score: <span className={`${scoreColor(data[0]?.score)}`}>{data[0]?.score}</span>
                </span>
              </div>
              <div className="p-2">
                <span className="text-center block font-bold text-gray-400 p-2">Other Possible Matches</span>
                <span className="text-center block mx-auto font-bold text-gray-300">
                  {data[1]?.course.course_name}: <span className={`${scoreColor(data[1]?.score)}`}>{data[1]?.score}</span>
                </span>
                <span className="text-center block mx-auto font-bold text-gray-300">
                  {data[2]?.course.course_name}: <span className={`${scoreColor(data[2]?.score)}`}>{data[2]?.score}</span>
                </span>
              </div>
            </div>
            }
          </form>
          
          

        </>
      </div>
    </main>
  );
}
