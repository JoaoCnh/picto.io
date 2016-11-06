import React from 'react';

class Travolta extends React.Component {
  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="message">
          <h1>404</h1>
          <h2>{this.props.msg || 'There\'s Nothing Here'}</h2>
        </div>
      </div>
    );
  }
}

export default Travolta;
