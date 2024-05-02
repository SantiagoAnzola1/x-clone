import PostCard from "./post-card"

function PostList({ posts, error }) {
    return (
        <>
            {
                error
                    ? <div>Error: {error.message}</div>
                    : (
                        posts?.map((post) => {
                            const { id, user, content } = post
                            const { username: userName, name: userFullName, avatar_url: avatarUrl } = user
                            return (
                                <PostCard
                                    key={id}
                                    userFullName={post.userFullName}
                                    userName={userName}
                                    avatarUrl={avatarUrl}
                                    content={content}
                                />
                            )
                        })
                    )
            }
        </>
    )
}

export default PostList