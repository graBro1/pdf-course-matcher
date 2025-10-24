import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className='flex mx-auto bg-gray-950 border-b border-b-gray-900 h-18 items-center'>
        <h1 className='mx-auto text-xl font-bold'>PDF Searcher</h1>
      </div>
      <div className="h-500 p-10">
        <div>
          <form className="mx-auto">
            <div className="mx-auto flex flex-col items-center">
              <input type="text" id="courseName" className="p-4 rounded-lg bg-gray-900 m-2 h-10 w-200 border-gray-800 border" placeholder="Enter Course Name"/>
              <textarea id="courseDescription" className="p-4 rounded-lg bg-gray-900 m-2 h-50 w-200 border border-gray-800 resize-none" placeholder="Enter Course Description"></textarea>
            </div>
            <div className="mx-auto w-max p-4 flex flex-col">
              <label className="text-center font-bold text-gray-400 p-2">Upload Course Catalog</label>
              <input type="file" id="courseCatalog" className="block border border-gray-700 rounded-lg file:bg-gray-700 file:px-3 file:py-2 file:me-3 file:cursor-pointer file:hover:bg-gray-800"/>
            </div>
            <button type="submit" className="px-5 py-1.5 m-6 rounded-lg bg-gray-800 mx-auto block text-center cursor-pointer border-gray-700 border text-lg">Submit</button>

          </form>

        </div>
      </div>
    </main>
  );
}
