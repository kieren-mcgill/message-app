import NewPost from "./NewPost";
import {useEffect, useState} from "react";
import {getPostsApi} from "./firebase-client";
import PostDisplay from "./PostDisplay";
import Header from "./Header";


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
        <div>
            <Header />
            <div>
                <NewPost getPosts={getPosts} username={username}/>
                <PostDisplay publishedPosts={publishedPosts} username={username} getPosts={getPosts}/>

            </div>


        </div>
    );
};

export default App;
