import React from 'react';

class App extends React.Component {
    render() {
        console.log('render app');
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;