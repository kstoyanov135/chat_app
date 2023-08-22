import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height = "100vh"
            projectID = "1da343bc-b3a6-4864-b219-9c5816b7f1ae"
            userName = "Kstoyanov"
            userSecret = "123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    )
}

export default App;