import {Button, TextField} from "@mui/material";
import {useState} from "react";
import styles from './styles/NewPost-styling.module.css'
import SendIcon from '@mui/icons-material/Send';

const NewPost = ({axiosClient}) => {

    const [postInfo, setPostInfo] = useState(
        {
            text: ''
        }
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        axiosClient.postMessage(postInfo)
        setPostInfo({
            text: ''
        })
    }

    const handleChange = (event) => {
        setPostInfo(
            {
                ...postInfo, text: event.target.value
            }
        )
    }

    return (
        <form className={styles.postForm} onSubmit={handleSubmit}>
            <TextField className={styles.postInput}
                       onChange={handleChange}
                       id="new-post"
                       placeholder="What do you want to say?"
                       variant="outlined"
                       value={postInfo.text}/>
            <Button type="submit"><SendIcon /></Button>
        </form>
    )
}

export default NewPost