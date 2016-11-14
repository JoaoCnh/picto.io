import React from 'react';
import { connect } from 'react-redux';

import ChatMessageList from './chat/ChatMessageList';
import ChatForm from './chat/ChatForm';

import {
    updateMessage,
    sendingMessage,
    sendMessage,
    messageError,
} from '../actions/chatActions';

@connect((store) => {
    return {
        socket: store.app.socket,
        username: store.app.username,
        messages: store.chat.messages,
        error: store.chat.error,
        sendingMessage: store.chat.sendingMessage,
        currentMessage: store.chat.currentMessage,
    };
})
class Chat extends React.Component {
    _onMessageChange(event) {
        this.props.dispatch(updateMessage(event.target.value));
    }
    _sendMessage(message) {
        this.props.dispatch(sendingMessage());

        setTimeout(() => {
            try {
                let messageObj = {
                    content: message,
                    author: this.props.username,
                    time: Date.now(),
                };

                this.props.dispatch(sendMessage(messageObj));

                this.props.socket.emit('chat message', messageObj);
            } catch (error) {
                this.props.dispatch(messageError());
            }
        }, 250);
    }
    render() {
        return (
            <div className="chat-window">
                <ChatMessageList messages={this.props.messages}
                    username={this.props.username} />

                <div className="chat-bottom-wrapper clearfix">
                    <ChatForm currentMessage={this.props.currentMessage}
                        sendingMessage={this.props.sendingMessage}
                        error={this.props.error}
                        changeHandler={this._onMessageChange.bind(this)}
                        submitHandler={this._sendMessage.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Chat;