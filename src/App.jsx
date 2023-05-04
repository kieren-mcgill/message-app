import NewPost from "./NewPost";
import PostDisplay from "./PostDisplay";
import Header from "./Header";


const App = ({axiosClient, publishedMessages, username}) => {

    return (
        <div>
            <Header username={username}/>
            <div>
                <NewPost axiosClient={axiosClient}/>
                <PostDisplay
                    publishedMessages={publishedMessages}
                    username={username}
                    axiosClient={axiosClient}
                />
            </div>
        </div>
    )
}

export default App;
