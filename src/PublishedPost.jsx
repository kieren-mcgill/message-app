import {Button} from "@mui/material";
import styles from './styles/PublishedPost-styling.module.css'


const PublishedPost = ({axiosClient, text, username, likes}) => {

    // const clientHasLiked = () => {
    //     return likes.filter((likers) => likers === username).length === 1
    // }

    // const likePost = (post) => {
    //     likePostApi(post, props.username)
    //         .then(props.getPosts)
    // }
    //
    // const unlikePost = (post) => {
    //     dislikePostApi(post, props.username)
    //         .then(props.getPosts)
    // }
    //
    // const clientLiked = clientHasLiked();
    //
    // const likeBtn = () => {
    //     clientLiked ?
    //         unlikePost(props.post, props.username) :
    //         likePost(props.post, props.username);
    // }

    // const handleDelete = () => {
    //     axiosClient.deleteMessage()
    // }

    return (
        <div className={styles.bubbleContainer}>
            <div className={`${styles.publishedPost} ${styles.bubble}`}>
                <p>{username} says:</p>
                <p>{text}</p>
                {/*<div className={styles.postButtons}>*/}
                {/*    <p>👍 {likes.length}</p>*/}
                {/*    <Button onClick={likeBtn}>{clientLiked ? 'unlike' : 'like'}</Button>*/}
                {/*    {props.post.username === props.username && <Button onClick={handleDelete}>Delete</Button>}*/}
                {/*</div>*/}
            </div>
        </div>

    )
}

export default PublishedPost