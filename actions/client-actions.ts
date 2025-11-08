'use client'

import { FormEvent, useTransition } from "react"

// Validates inputs and submits form data to be handled by the server
export function submitValidated(event: FormEvent<HTMLFormElement>, action: Function, startTransition: React.TransitionStartFunction) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    // Validate if inputs follow requirements
    if ((formData.get("name") as string).length >= 5 && (formData.get("description") as string).length >= 20 && (formData.get("catalog") as File).type == "application/pdf") {
        // Submit data to server if all inputs are valid
        startTransition(() => {
            action(formData)
        })
    }
}
  
// Colors confidence score based on its value
export function scoreColor(score: number) {
    if (score >= 0.8) {
        return "text-cyan-400"
    } else if (score >=0.6) {
        return "text-green-500"
    } else if (score >= 0.4) {
        return "text-yellow-300"
    }
}