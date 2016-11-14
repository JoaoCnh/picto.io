import React from 'react';

import ChatMessage from './ChatMessage';

class ChatMessageList extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.messages.length > this.props.messages.length;
    }
    componentDidUpdate() {
        let messageList = document.getElementById('chat-message-list');
        messageList.scrollTop = messageList.scrollHeight;
    }
    render() {
        let chatMessages = this.props.messages.map((message, index) => {
            let isAuthor = this.props.username === message.author;

            return (
                <ChatMessage key={index} isAuthor={isAuthor} message={message} />
            );
        });

        return (
            <ul id="chat-message-list" className="chat-messages">
                {chatMessages}
            </ul>
        );
    }
}

export default ChatMessageList;