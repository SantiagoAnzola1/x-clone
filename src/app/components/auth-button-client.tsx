'use client'
import { createClient } from "../../../utils/supabase/client";
import { GitHubIcon } from "./incons";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { redirect } from 'next/navigation'
import { Database } from "./types";
import { useEffect, useState } from "react";

export function AuthButton({ session }: { session: Session | null }) {

    const supabase = createClient()
    const router = useRouter()
    async function signInWithGithub() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        })
        if (error) console.error(error.message)

    }

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        // router.refresh()

        if (error) console.error(error.message)
    }

    router.refresh()

    return (
        <header className="flex content-center justify-center gap-3">
            {
                session === null
                    ? (
                        <button onClick={signInWithGithub} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                            {GitHubIcon()}
                            Iniciar sesión con Github
                        </button>
                    )
                    : (
                        <button onClick={signOut} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                            Cerrar sesión
                        </button>

                    )
            }
        </header>
    )

}

