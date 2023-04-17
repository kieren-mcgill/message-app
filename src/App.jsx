import NewPost from "./NewPost";
import PostBoard from "./PostBoard";
import {useState} from "react";
import {getPostsApi, postPostApi} from "./firebase-client";

const App = () => {
    const [publishedPosts, setPublishedPosts] = useState([]);

    const username = 'kieren_m';

    const getPosts = () => {
        getPostsApi()
            .then((retrievedPosts) => setPublishedPosts(retrievedPosts))
    }

    const addPost = (post) => {
        postPostApi(post, username)
            .then(() => {
                getPosts();
            })
    }

    return (
        <>
            <PostBoard publishedPosts={publishedPosts}/>
            <NewPost addPost={addPost}/>
        </>
    );
};

export default App;
