import PublishedPost from "./PublishedPost";

const MyActivity = (props) => {

    const sortLikes = (post) => {
        return post.likes ? post.likes : []
    }

    return (
        <div>
            {props.publishedPosts.filter((post) => post.username === props.username).map((post) =>
                <div key={post.id}>
                    <PublishedPost text={post.text} likes={sortLikes(post)}
                                   username={props.username}
                                   post={post}
                                   getPosts={props.getPosts}
                    ></PublishedPost>
                </div>
            )}
        </div>
    )
}

export default MyActivity