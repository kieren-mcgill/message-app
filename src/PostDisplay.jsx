import {Route, Routes} from 'react-router-dom';
import PostBoard from "./PostBoard";
import MyActivity from "./MyActivity";


const PostDisplay = ({axiosClient, username, publishedMessages}) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={(<PostBoard
                    publishedMessages={publishedMessages}
                    username={username}
                    axiosClient={axiosClient}
                />)}/>
                <Route path="/my-activity" element={(
                    <MyActivity
                        publishedMessages={publishedMessages}
                        username={username}
                        axiosClient={axiosClient}
                    />)}/>
            </Routes>
        </div>
    )
}

export default PostDisplay