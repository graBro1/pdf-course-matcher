import React from 'react'

export default function page() {
  return (
    <div>
        <h1 className="font-bold text-lg md:text-xl text-center m-4 md:m-8 text-gray-300">About</h1>
        <p className="text-center block mx-auto text-sm md:text-base font-bold text-gray-300 max-w-[80%] md:max-w-[40%]">
          This NLP tool uses LLMs and semantic embeddings to search through community college course catalogs and return possible matches to an inputted course. 
          This is helpful to discover possible matching courses to those that do not have articulated equivalencies listed between campuses.
        </p>
        <span className="font-bold md:text-lg text-center m-4 md:m-8 text-gray-400 block">How to Use</span>
        <p className="text-center block mx-auto text-sm md:text-base font-bold text-gray-400 max-w-[80%] md:max-w-[50%]">
          1. Input the details of a desired course into the respective Course Name and Course Description fields.<br></br>
          2. Upload a PDF file of the course catalog for the school in which you wish to search for matches.<br></br>
          3. Press submit. <br></br>
          The returned values include the name of the matching course and a confidence score representing the likelihood of equivalency.
        </p>
    </div>
  )
}
