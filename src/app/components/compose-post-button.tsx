'use client'
import { useFormStatus } from "react-dom"

export default function ComposePostButton() {
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} className="bg-sky-600 text-sm font-bold rounded-full px-5 py-2 self-end">
            {
                pending ? 'Creando.....' : 'Crear post'
            }
        </button>
    )
}
