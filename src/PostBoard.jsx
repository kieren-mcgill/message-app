import PublishedPost from "./PublishedPost";

const PostBoard = (props) => {

    const sortLikes = (post) => {
        return post.likes ? post.likes : []
    }

    return (
        <div>
            {props.publishedPosts.map((post) =>
                <div key={post.id}>
                    <PublishedPost text={post.text} likes={sortLikes(post)}
                                   username={props.username} likePost={props.likePost} unlikePost={props.unlikePost}
                                   post={post}
                                   getPosts={props.getPosts}
                    ></PublishedPost>
                </div>
            )}
        </div>
    )
}

export default PostBoard