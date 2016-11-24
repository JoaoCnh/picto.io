import React from 'react';
import { connect } from 'react-redux';

import Navbar from './layout/Navbar';
import Picto from './Picto';
import Chat from './Chat';

import { init, setUsername } from '../actions/appActions';

@connect((store) => {
    return {
        socket: store.app.socket,
        username: store.app.username,
        currentUsers: store.app.currentUsers,
    };
})
class Home extends React.Component {
    _setUsername(username) {
        if (username === false) return false;

        if (username === "") {
            swal.showInputError("You must have a username!");
            return false;
        }

        this.props.dispatch(setUsername(username));
        swal("Nice!", `Welcome ${username}`, "success");
    }
    componentWillMount() {
        if (localStorage.getItem('__pictoUser')) {
            this.props.dispatch(init());
        }
    }
    render() {
        return (
            <div>
                <Navbar username={this.props.username}
                    currentUsersNumber={this.props.currentUsers.length} />

                <div className="row">
                    <div className="col-md-6">
                        <Picto />
                    </div>
                    <div className="col-md-6">
                        <Chat currentUser={this.props.currentUser} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;