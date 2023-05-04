import PublishedPost from "./PublishedPost";

const MyActivity = ({axiosClient, username, publishedMessages}) => {

    const sortLikes = (post) => {
        return post.likes ? post.likes : []
    }

    return (
        <div>
            {publishedMessages.filter((post) => post.username === username).map((post) =>
                <div key={post.id}>
                    <PublishedPost text={post.text}
                                   likes={sortLikes(post)}
                                   key={post.id}
                                   username={username}
                                   axiosClient={axiosClient}
                    ></PublishedPost>
                </div>
            )}
        </div>
    )
}

export default MyActivity