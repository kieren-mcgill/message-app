
const PostBoard = ({publishedPosts}) => {
    return(
        <div>
            {publishedPosts.map((post) =>
                <div>
                    <p>{post.text}</p>
                </div>
            )}
        </div>
    )
}

export default PostBoard