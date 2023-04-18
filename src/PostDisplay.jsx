import {Link, Route, Routes} from 'react-router-dom';
import PostBoard from "./PostBoard";
import MyActivity from "./MyActivity";
import {Button} from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const PostDisplay = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Link to="/"><ForumIcon /></Link>
                </div>
                <div>
                    <Link to="/my-activity"><AccountCircleIcon /></Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={(<PostBoard publishedPosts={props.publishedPosts} username={props.username}
                                                     getPosts={props.getPosts}/>)}/>
                <Route path="/my-activity" element={(
                    <MyActivity publishedPosts={props.publishedPosts} username={props.username}
                                getPosts={props.getPosts}/>)}/>
            </Routes>
        </div>
    )
}

export default PostDisplay