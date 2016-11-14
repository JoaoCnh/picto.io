import React from 'react';
import reactMixin from 'react-mixin';
import ReactEmoji from 'react-emoji';
import Timestamp from 'react-timestamp';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ChatMessage extends React.Component {
    render() {
        let direction = this.props.isAuthor ? 'right' : 'left';

        return (
            <ReactCSSTransitionGroup
                transitionName="chat-message"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <li className={`chat-message ${direction}`}>
                    <div className="avatar"></div>
                    <div className="text-wrapper">
                        <div className="text">
                            <strong>{this.props.message.author} says:</strong>
                            {' '}
                            {ReactEmoji.emojify(this.props.message.content)}

                            <span className="pull-right">
                                <Timestamp time={this.props.message.time} />
                            </span>
                        </div>
                    </div>
                </li>
            </ReactCSSTransitionGroup>
        );
    }
}

reactMixin.onClass(ChatMessage, ReactEmoji);

export default ChatMessage;