import NewPost from "./NewPost";
import PostBoard from "./PostBoard";
import {useEffect, useState} from "react";
import {dislikePostApi, getPostsApi, likePostApi, postPostApi} from "./firebase-client";

const App = () => {
    const [publishedPosts, setPublishedPosts] = useState([]);

    const username = 'kieren_m';

    const getPosts = () => {
        getPostsApi()
            .then((retrievedPosts) => setPublishedPosts(retrievedPosts))
    }

    useEffect(() => {
        getPosts()
    }, [])


    const addPost = (post) => {
        postPostApi(post, username)
            .then(getPosts)
    }

    const likePost = (post) => {
        likePostApi(post, username)
            .then(getPosts)
    }

    const unlikePost = (post) => {
        dislikePostApi(post, username)
            .then(getPosts)
    }

    return (
        <>
            <PostBoard publishedPosts={publishedPosts} username={username} likePost={likePost} unlikePost={unlikePost}
                       getPosts={getPosts}/>
            <NewPost addPost={addPost}/>
        </>
    );
};

export default App;
