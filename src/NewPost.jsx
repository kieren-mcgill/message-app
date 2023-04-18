import {Button, Grid, TextField} from "@mui/material";
import {useState} from "react";
import {postPostApi} from "./firebase-client";
import styles from './styles/NewPost-styling.module.css'
import SendIcon from '@mui/icons-material/Send';

const NewPost = (props) => {

    const [postInfo, setPostInfo] = useState(
        {
            text: ''
        }
    )

    const addPost = (post) => {
        postPostApi(post, props.username)
            .then(props.getPosts)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addPost(postInfo)
        setPostInfo({
            text: ''
        })
    }

    const onChange = (event) => {
        setPostInfo(
            {
                ...postInfo, text: event.target.value
            }
        )
    }

    return (
        <form className={styles.postForm} onSubmit={onSubmit}>
            <TextField className={styles.postInput} onChange={onChange} id="new-post" placeholder="What do you want to say?" variant="outlined"
                       value={postInfo.text}/>
            <Button type="submit"><SendIcon /></Button>
        </form>
    )
}

export default NewPost