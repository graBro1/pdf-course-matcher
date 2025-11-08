'use server'
import React from 'react'


// Fetches data to Python comparison script and returns best matches to the frontend 
export async function compare(previousState: unknown, formData: FormData) {
    
    try {
        
        const response = await fetch("http://localhost:8000/compare", {
            method: "POST",
            body: formData
        })

        if (!response.ok) {
            throw new Error(`${response.status}`)

        }

        const data = await response.json()

        return({results: data, success: true})

    } catch(error) {
        console.log(error)
    }
    


}