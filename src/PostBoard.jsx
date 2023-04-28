import PublishedPost from "./PublishedPost";
import styles from './styles/PostBoard-styling.module.css'

const PostBoard = (props) => {

    const sortLikes = (post) => {
        return post.likes ? post.likes : []
    }

    return (
        <div className={styles.postBoard}>
            {props.publishedPosts.map((post, i) =>
                    <PublishedPost text={post.text} likes={sortLikes(post)}
                                   order={i}
                                   key={post.id}
                                   username={props.username}
                                   post={post}
                                   getPosts={props.getPosts}
                    ></PublishedPost>
            )}
        </div>
    )
}

export default PostBoard