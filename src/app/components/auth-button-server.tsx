import { createClient } from "../../../utils/supabase/server";

import { AuthButton } from "./auth-button-client";
import { redirect } from 'next/navigation';
export async function AuthButtonServer() {
    const supabase = createClient()
    const { data: { session } } = await supabase.auth.getSession()
    // const { data: { user } } = await supabase.auth.getUser()
    // const router = useRouter




    return <AuthButton session={session} />
}
export async function signInWithGithub() {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })
    if (error) console.error(error.message)

}
export async function signOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    // router.refresh()

    if (error) console.error(error.message)
}