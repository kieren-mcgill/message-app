import NewPost from "./NewPost";
import PostBoard from "./PostBoard";
import {useEffect, useState} from "react";
import {getPostsApi} from "./firebase-client";

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

    return (
        <>
            <PostBoard publishedPosts={publishedPosts} username={username} getPosts={getPosts}/>
            <NewPost getPosts={getPosts} username={username}/>
        </>
    );
};

export default App;
