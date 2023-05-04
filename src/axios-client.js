import axios from 'axios';
import {useEffect, useState} from "react";
import App from "./App";

const AxiosClient = () => {

    const [publishedMessages, setPublishedMessages] = useState([])
    const [username, setUsername] = useState("")

    const baseUrl = 'http://localhost:3002';
    const apiCall = ({method, url, data}) => {
        return axios({
            method,
            url: `${baseUrl}${url}`,
            data,
        }).catch((error) => {
            console.log(error)
        })
    }

    const getMessages = () => {
        apiCall({
            method: 'get',
            url: '/fakebook'
        })
            .then((response) => {
                console.log(response)
                setPublishedMessages(response.data)
            })
    }

    useEffect(() => {
        getMessages()
    }, [])


    const postMessage = (message) => {
        apiCall({
            method: 'post',
            url: 'fakebook',
            data: message
        })
            .then(() => getMessages())
    }

    const deleteMessage = (id) => {
        apiCall({
            method: 'delete',
            url: `fakebook${id}`,
        })
            .then(() => getMessages())
    }

    const axiosClient = {getMessages, postMessage, deleteMessage}

    return (
        <>
            <App axiosClient={axiosClient}
                 publishedMessages={publishedMessages}
                 username={username}
            />
        </>
    )

}

export default AxiosClient


// export const likePostApi = (post, username) => new Promise((resolve, reject) => {
//   const oldLikes = !isEmpty(post.likes) ? post.likes : [];
//   const likesSet = new Set([...oldLikes, username]);
//   const updatedLikes = Array.from(likesSet);
//   axios({
//     method: 'patch',
//     url: `${baseUrl}/posts/${post.id}.json`,
//     data: { ...post, likes: updatedLikes },
//   })
//     .then(resolve)
//     .catch(reject)
// });
//
// export const dislikePostApi = (post, username) => new Promise((resolve, reject) => {
//   const updatedLikes = post.likes.filter((user) => user !== username);
//   axios({
//     method: 'patch',
//     url: `${baseUrl}/posts/${post.id}.json`,
//     data: { ...post, likes: updatedLikes },
//   })
//     .then(resolve)
//     .catch(reject)
// });

