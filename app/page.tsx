import { compare } from "@/actions/actions";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-screen p-10">
        <div>
          <form action={compare} className="mx-auto">
            <label className="text-center block font-bold text-gray-400 p-2">Enter Course Information</label>
            <div className="mx-auto flex flex-col items-center">
              <input 
              type="text" 
              id="courseName" 
              name="name"
              autoComplete="off"
              className="p-4 rounded-lg bg-gray-900 m-2 h-10 w-200 border-gray-800 border focus:border-gray-700 focus:outline-none" 
              placeholder="Enter Course Name"
              />
              <textarea 
              id="courseDescription"
              name="description"
              className="p-4 rounded-lg bg-gray-900 m-2 h-50 w-200 border border-gray-800 focus:border-gray-700 focus:outline-none resize-none" 
              placeholder="Enter Course Description"
              ></textarea>
            </div>
            <div className="mx-auto w-max p-4 flex flex-col">
              <label className="text-center font-bold text-gray-400 p-2">Upload Course Catalog</label>
              <input 
              type="file" 
              id="courseCatalog"
              name="catalog" 
              accept=".pdf" 
              className="block border border-gray-700 rounded-lg m-2 file:bg-gray-700 file:px-3 file:py-2 file:me-3 file:cursor-pointer file:hover:bg-gray-800"
              />
            </div>
            <button 
            type="submit" 
            className="px-5 py-1.5 m-6 rounded-lg bg-gray-800 mx-auto block text-center cursor-pointer border-gray-700 hover:bg-gray-900 border text-lg font-bold"
            >Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
