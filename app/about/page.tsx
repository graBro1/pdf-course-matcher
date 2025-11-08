import React from 'react'

export default function page() {
  return (
    <div>
        <h1 className="font-bold text-lg md:text-xl text-center m-4 md:m-8 text-gray-300">About</h1>
        <p className="text-center block mx-auto text-sm md:text-base p-2 font-bold text-gray-300 max-w-[80%] md:max-w-[50%]">
          This NLP tool uses locally hosted LLMs and semantic embeddings to search through community college course catalogs and return possible matches to an inputted course. 
          This is helpful to discover possible matching courses to those that do not have articulated equivalencies listed between campuses.
        </p>
        <span className="font-bold md:text-lg text-center m-2 md:m-6 text-gray-400 block">How to Use</span>
        <p className="text-center block mx-auto text-sm md:text-base p-2 font-bold text-gray-400 max-w-[80%] md:max-w-[50%] leading-7">
          1. Input the details of a desired course into the respective Course Name and Course Description fields.
        </p>
        <p className="text-center block mx-auto text-sm md:text-base p-2 font-bold text-gray-400 max-w-[80%] md:max-w-[50%] leading-7">
          2. Upload a PDF file of the course catalog for the school in which you wish to search for matches.
        </p>
        <p className="text-center block mx-auto text-sm md:text-base p-2 font-bold text-gray-400 max-w-[80%] md:max-w-[50%] leading-7">
          3. Press submit.
        </p>
        <span className="font-bold md:text-lg text-center m-2 md:m-6 text-gray-300 block">Results</span>
        <p className="text-center block mx-auto text-sm md:text-base p-2 font-bold text-gray-300 max-w-[80%] md:max-w-[50%] leading-7">
          Up to 3 matching courses are returned with their names and confidence scores representing the likelihood of equivalency.
        </p>
        <p className="text-center block mx-auto text-sm md:text-base p-2 font-bold text-gray-300 max-w-[80%] md:max-w-[50%] leading-7">
          This score is a value between 0 and 1, where a higher score means higher accuracy.
        </p>
        <p className="text-center block mx-auto text-sm md:text-base p-2 font-bold text-gray-300 max-w-[80%] md:max-w-[50%] leading-7">
          All returned matches have a minimum confidence of 0.4.
        </p>
        <span className="font-bold md:text-lg text-center m-2 md:m-6 text-gray-400 block">Troubleshooting/Configuration</span>
        <p className="text-center block mx-auto text-sm md:text-base p-2 font-bold text-gray-400 max-w-[80%] md:max-w-[50%] leading-7">
          Results may vary based on multiple factors, including the size of the catalog, the selected LLM, and the hardware specifications of the device.
        </p>
        <p className="text-center block mx-auto text-sm md:text-base p-2 font-bold text-gray-400 max-w-[80%] md:max-w-[50%] leading-7">
          To increase speed and accuracy, Ollama options can be configured to support a larger model and higher query count.
        </p>
        <p className="text-center block mx-auto text-sm md:text-base p-2 font-bold text-gray-400 max-w-[80%] md:max-w-[50%] leading-7">
          In case of inaccuracies on lower end specs, catalogs should be narrowed down to a more focused scope of courses.
          For example, when searching for equivalencies to a specific mathematics course, a catalog cut down to only the mathematics section may yield greater results.
        </p>
    </div>
  )
}
