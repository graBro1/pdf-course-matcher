"use server";
 import React from 'react'
 
export async function compare(formData: FormData) {
    const data = {
        course_name: formData.get("name"),
        course_description: formData.get("description"),
        course_catalog: formData.get("catalog")
    }

    console.log(formData)

   try {
    const response = await fetch("http://localhost:8000/compare", {
      method: "POST",
      body: formData
    })

    if (!response.ok) {
        throw new Error(`${response.status}`)

    }



   } catch(error) {
    console.log(error)
   }
    


}