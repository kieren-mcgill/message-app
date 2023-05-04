import PublishedPost from "./PublishedPost";
import styles from './styles/PostBoard-styling.module.css'

const PostBoard = ({axiosClient, publishedMessages}) => {

    const sortLikes = (post) => {
        return post.likes ? post.likes : []
    }

    return (
        <div className={styles.postBoard}>
            {publishedMessages.map((post) =>
                    <PublishedPost text={post.text}
                                   likes={sortLikes(post)}
                                   key={post.id}
                                   username={publishedMessages.username}
                                   axiosClient={axiosClient}
                    ></PublishedPost>
            )}
        </div>
    )
}

export default PostBoard