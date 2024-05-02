import { unstable_noStore as noStore } from 'next/cache';
import { createClient } from '../../utils/supabase/server';
import { AuthButton } from './components/auth-button-client';
import PostCard from './components/post-card';
import PostList from './components/post-list';

export default async function Posts() {
  noStore();
  const supabase = createClient()


  let { data: posts, error } = await supabase
    .from('posts')
    .select('*, user:users(*)')

  const { data: { session } } = await supabase.auth.getSession()


  return (
    <main className='flex flex-col items-center justify-between gap-5 '>

      <section className='max-w-[600px] mx-auto w-full border-l border-r border-white/20 min-h-screen'>
        <AuthButton session={session} />
        <PostList posts={posts} error={error} />
      </section>

    </main>
  )

}
