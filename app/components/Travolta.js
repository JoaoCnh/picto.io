import React from 'react';

class Travolta extends React.Component {
    render() {
        return (
            <div>
                <div className="travolta-background"></div>
                <div className="travolta-message">
                    <h1 className="travolta-header">404</h1>
                    <h2 className="travolta-sub-header">
                        {this.props.msg || 'There\'s Nothing Here'}
                    </h2>
                </div>
            </div>
        );
    }
}

export default Travolta;
