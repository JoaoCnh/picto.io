import React from 'react';

class ChatForm extends React.Component {
    _handleSubmit(event) {
        event.preventDefault();
        this.props.submitHandler(this.props.currentMessage);
    }
    render() {
        let formButton = this.props.sendingMessage ? (
            <button type="submit" className="chat-send-message" disabled="disabled">
                <div className="text">
                    Sending{' '}
                    <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>
                </div>
            </button>
        ) : (
            <button type="submit" className="chat-send-message">
                <div className="text">
                    Send{' '}
                    <i className="fa fa-send"></i>
                </div>
            </button>
        );

        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <div className="chat-message-input-wrapper">
                    <input className="chat-message-input"
                        placeholder="Type your message here..."
                        onChange={this.props.changeHandler}
                        value={this.props.currentMessage} />
                </div>
                {formButton}
            </form>
        );
    }
}

export default ChatForm;