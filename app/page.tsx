'use client'

import { scoreColor, submitValidated } from "@/actions/client-actions";
import { compare } from "@/actions/server-actions";
import React, { useActionState, useTransition } from 'react'


export default function Home() {

  const [data, action, isPending] = useActionState(compare, undefined)
  const [bool, startTransition] = useTransition()

  return (
    <main>
      <form onSubmit={(event) => submitValidated(event, action, startTransition)} className="mx-auto p-4" noValidate>
        <span className="text-center text-lg block font-bold text-gray-300 p-2">Enter Course Information</span>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-full m-2">
            <label htmlFor="courseName" className="px-2 text-left w-200 min-w-3/7 max-w-[85%] font-bold text-gray-400">Course Name</label>
            <input 
            type="text" 
            id="courseName" 
            name="name"
            autoComplete="off"
            className="p-3 rounded-lg bg-gray-900 m-2 h-10 w-200 min-w-3/7 max-w-[85%] border-gray-800 border focus:border-gray-700 focus:outline-none placeholder:text-gray-600 user-invalid:border-red-500/80" 
            placeholder="Enter at least 5 characters"
            minLength={5}
            required
          />
          </div>
          <div className="flex flex-col items-center w-full m-2">
            <label htmlFor="courseDescription" className="px-2 text-left w-200 min-w-3/7 max-w-[85%] font-bold text-gray-400">Course Description</label>
            <textarea 
            id="courseDescription"
            name="description"
            className="p-3 rounded-lg bg-gray-900 m-2 h-50 w-200 min-w-3/7 max-w-[85%] border border-gray-800 focus:border-gray-700 focus:outline-none resize-none placeholder:text-gray-600 user-invalid:border-red-500/80" 
            placeholder="Enter at least 20 characters"
            minLength={20}
            required
            ></textarea>
          </div>
          
        </div>
        <div className="mx-auto p-4 flex flex-col items-center">
          <span className="text-center text-lg font-bold text-gray-300 p-2">Upload Course Catalog</span>
          <input 
          type="file" 
          id="courseCatalog"
          name="catalog" 
          accept=".pdf"
          required={true}
          className="block border border-gray-700 rounded-lg m-2 w-75 max-w-[85%] file:bg-gray-700 file:px-3 file:py-2 file:me-3 file:cursor-pointer file:hover:bg-gray-800 user-invalid:border-red-500/80"
          />
        </div>
        <button 
        type="submit" 
        disabled={isPending}
        className="px-5 py-1.5 m-2 rounded-lg bg-gray-800 mx-auto block text-center not-disabled:cursor-pointer border-gray-700 hover:enabled:bg-gray-900 border text-lg font-bol disabled:opacity-60"
        >Submit</button>
      </form>

      <div>
        {isPending && 
          <div className="m-4 text-center block font-bold text-lg text-gray-300 p-2">
            Loading Results...
          </div>
        }

        {data?.success && !data?.results[0] && !isPending &&
          <div className="m-4 text-center block font-bold text-lg text-red-500 p-2">No Matches Found.</div>
        }

        {data?.results[0] && !isPending &&
          <div className="m-2">
            <div className="p-2">
              <span className="text-center block font-bold text-lg text-gray-300 p-2">Results</span>
              <span className="text-center block mx-auto text-lg font-bold text-gray-300">
                Closest Match: <span className="text-gray-400">{data?.results[0]?.course.course_name}</span>
              </span>
              <span className="text-center block mx-auto text-lg font-bold text-gray-300">
                Confidence Score: <span className={`${scoreColor(data?.results[0]?.score)}`}>{data?.results[0]?.score}</span>
              </span>
            </div>

            {data?.results[1] &&
              <div className="p-2">
                <span className="text-center block font-bold text-gray-400 p-2">Other Possible Matches</span>
                <span className="text-center block mx-auto font-bold text-gray-300">
                  {data?.results[1]?.course.course_name}: <span className={`${scoreColor(data?.results[1]?.score)}`}>{data?.results[1]?.score}</span>
                </span>
                
                {data?.results[2] &&
                  <span className="text-center block mx-auto font-bold text-gray-300">
                    {data.results[2].course.course_name}: <span className={`${scoreColor(data.results[2].score)}`}>{data.results[2].score}</span>
                  </span>
                }
              </div>
            }
          </div>
        }
      </div>
    </main>
  );
}
