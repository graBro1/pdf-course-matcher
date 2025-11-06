'use server'
import React from 'react'
 
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

        const fieldInfo = {name: formData.get("name") as string, description: formData.get("description") as string}

        return{fieldInfo: fieldInfo, results: data}

    } catch(error) {
        console.log(error)
    }
    


}