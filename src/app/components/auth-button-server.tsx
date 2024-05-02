import { createClient } from "../../../utils/supabase/server";

import { AuthButton } from "./auth-button-client";
import { redirect } from 'next/navigation';
export async function AuthButtonServer() {
    const supabase = createClient()
    const { data: { session } } = await supabase.auth.getSession()

   
    return <AuthButton session={session} />
}