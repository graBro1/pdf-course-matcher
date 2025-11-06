'use client'

import { FormEvent, useTransition } from "react"


export function submitValidated(event: FormEvent<HTMLFormElement>, action: Function, startTransition: React.TransitionStartFunction) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    if ((formData.get("name") as string).length >= 5 && (formData.get("description") as string).length >= 20 && (formData.get("catalog") as File).type == "application/pdf") {
        startTransition(() => {
            action(formData)
        })
    }
}
  

export function scoreColor(score: number) {
    if (score >= 0.8) {
        return "text-cyan-400"
    } else if (score >=0.6) {
        return "text-green-500"
    } else if (score >= 0.4) {
        return "text-yellow-300"
    }
}