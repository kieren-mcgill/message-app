import {Button} from "@mui/material";
import {useState} from "react";


const PublishedPost = (props) => {

    const clientHasLiked = () => {
        return props.likes.filter((likers) => likers === props.username).length === 1
    }

    const clientLiked = clientHasLiked();

    // const [clientLiked, setClientLiked] = useState(clientHasLiked())

    const onClick = () => {
        clientLiked ?
            props.unlikePost(props.post, props.username) :
            props.likePost(props.post, props.username);
        // setClientLiked(clientHasLiked)
    }

    return (
        <div>
            <p>{props.text}</p>
            <p>👍 {props.likes.length}</p>
            <Button onClick={onClick}>{clientLiked ? 'unlike' : 'like'}</Button>
        </div>
    )
}

export default PublishedPost