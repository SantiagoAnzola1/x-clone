import { PostgrestError } from "@supabase/supabase-js"
import PostCard from "./post-card"
import { type Post } from "../types/posts"
function PostList({ posts, error }: { posts: Post[] | null, error: PostgrestError | null }) {
    return (
        <>
            {
                error
                    ? <div>Error: {error.message}</div>
                    : (
                        posts?.map((post) => {
                            const { id, user, content, usder_id } = post
                            if (user) {
                                const { username: userName, name: userFullName, avatar_url: avatarUrl } = user
                                return (
                                    <PostCard
                                        key={id}
                                        userFullName={userFullName}
                                        userName={userName}
                                        avatarUrl={avatarUrl}
                                        content={content}
                                    />
                                )
                            }
                            return <p> Error al obtener el usuario {usder_id} </p>

                        })
                    )
            }
        </>
    )
}

export default PostList