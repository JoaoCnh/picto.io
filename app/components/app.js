import React from 'react';
import { connect } from 'react-redux';

import Picto from './Picto';

import { setUsername } from '../actions/appActions';

@connect((store) => {
  return {
    username: store.app.username,
  };
})
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.username != null) {
            sketch.init();
        }
    }
    _setUsername(username) {
        if (username === false) return false;

        if (username === "") {
            swal.showInputError("You must have a username!");
            return false;
        }

        this.props.dispatch(setUsername(username));
        swal("Nice!", "Welcome " + username, "success");
    }
    _clearCanvas(event) {
        event.preventDefault();
        sketch.clearCanvas();
    }
    _setColor(color) {
        sketch.setColor(color.hex);
    };
    render() {
        if (this.props.username == null) {
            swal({
              title: "Hi there! You're new!",
              text: "Write your username below:",
              type: "input",
              showCancelButton: false,
              closeOnConfirm: false,
              animation: "slide-from-top",
              inputPlaceholder: "Username"
            }, this._setUsername.bind(this));

            return (
                <div />
            );
        }

        return (
            <div className="row">
                <div className="col s2">
                </div>

                <div className="col s5">
                  <ul className="collection">
                  </ul>
                  <form>
                    <div className="input-field col s10">
                      <i className="material-icons prefix">send</i>
                      <input id="message" type="text" className="validate" />
                      <label htmlFor="message">Message</label>
                    </div>
                  </form>
                </div>

                <Picto />
            </div>
        );
    }
}

export default App;