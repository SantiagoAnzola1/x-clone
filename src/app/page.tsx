import { unstable_noStore as noStore } from 'next/cache';
import { createClient } from '../../utils/supabase/server';
import { AuthButton } from './components/auth-button-client';
import PostList from './components/post-list';
import { Database } from './types/database';
import { Post } from './types/posts';
import ComposePost from './components/compose-post';

import { Spinner } from '@nextui-org/react';

export default async function Posts() {
  noStore();
  const supabase = createClient()


  let { data: posts, error } = await supabase
    .from('posts')
    .select('*, user:users(*)')
    .order('created_at', { ascending: false })

  const { data: { session } } = await supabase.auth.getSession()

  // const { data } = await supabase.auth.getUser()
  // const { user } = data
  console.log(session)

  // user?.app_metadata.
  return (
    <main className='flex flex-col items-center justify-between gap-5 '>


      <section className='max-w-[600px] mx-auto w-full border-l border-r border-white/20 min-h-screen'>
        <ComposePost userAvatarUrl={session?.user.user_metadata.avatar_url} />
        <PostList posts={posts} error={error} />
      </section>
      <AuthButton session={session} />


    </main>
  )

}
