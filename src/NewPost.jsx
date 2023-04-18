import {Button, Grid, TextField} from "@mui/material";
import {useState} from "react";
import {postPostApi} from "./firebase-client";

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
        <>
            <form onSubmit={onSubmit}>
                <Grid container spacing={4}>
                    <Grid item>
                        <TextField onChange={onChange} id="new-post" label="New post" variant="outlined"
                                   value={postInfo.text}/>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained">Post</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default NewPost