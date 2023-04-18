import {Button} from "@mui/material";
import {deletePostApi, dislikePostApi, likePostApi} from "./firebase-client";
import styles from './styles/PublishedPost.styling-module.css'


const PublishedPost = (props) => {

    const clientHasLiked = () => {
        return props.likes.filter((likers) => likers === props.username).length === 1
    }

    const likePost = (post) => {
        likePostApi(post, props.username)
            .then(props.getPosts)
    }

    const unlikePost = (post) => {
        dislikePostApi(post, props.username)
            .then(props.getPosts)
    }

    const clientLiked = clientHasLiked();

    const likeBtn = () => {
        clientLiked ?
            unlikePost(props.post, props.username) :
            likePost(props.post, props.username);
    }

    const deleteBtn = () => {
        deletePostApi(props.post.id)
            .then(props.getPosts)
    }

    return (
        <div>
            <p>{props.post.username} says:</p>
            <p className={styles.publishedPost}>{props.text}</p>
            <p>👍 {props.likes.length}</p>
            <Button onClick={likeBtn}>{clientLiked ? 'unlike' : 'like'}</Button>
            {props.post.username === props.username && <Button onClick={deleteBtn}>Delete</Button>}
        </div>
    )
}

export default PublishedPost