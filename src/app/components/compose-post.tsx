import { createClient } from "../../../utils/supabase/server";
import { InsertPost, type Post } from "../types/posts";
import { Database } from "../types/database";
import ComposeTextArea from "./compose-text-area";
import ComposePostButton from "./compose-post-button";

export default function ComposePost({ userAvatarUrl }: { userAvatarUrl: string }) {
    // console.log(userAvatarUrl)
    const addPost = async (formData: FormData) => {
        'use server'
        const content = formData.get('content') as string
        if (content === null) return

        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (user === null) return
        // await supabase.from('posts').insert({ content, user_id: user.id })

        const { data, error } = await supabase
            .from('posts')
            .insert<InsertPost>(
                { content: content, user_id: user.id },)
            .select()

    }
    return (
        <form action={addPost} className="flex items-start flex-row p-3 border-b border-white/20">

            <img className="rounded-full w-10 h-10 object-contain text-left" src={userAvatarUrl} />
            <div className="flex flex-1 flex-col gap-y-4 relative">
                <ComposeTextArea />
                {/* <button className="bg-sky-600 text-sm font-bold rounded-full px-5 py-2 self-end">
                    ccrear post
                </button> */}

                <ComposePostButton />

            </div>
        </form>
    )
}
