'use client'
import { Spinner } from "@nextui-org/react"
import { useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
export default function ComposeTextArea() {

    const { pending } = useFormStatus()
    const alreadySent = useRef(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)


    useEffect(() => {
        if (textAreaRef.current === null) return

        if (!pending && alreadySent.current) {
            alreadySent.current = false
            textAreaRef.current.value = ''
            return
        }

        alreadySent.current = pending
    }, [pending])

    return (
        <div className="relative">
            <textarea ref={textAreaRef} name="content" rows={4} className="w-full text-md bg-black placeholder-gray-500 p-2 px-3 focus:outline-none resize-none" placeholder="¿Qué está pasando?">
            </textarea>
            {
                pending && (
                    <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )
            }


        </div>

    )
}
