import React from 'react';

class PictoToolbar extends React.Component {
    render() {
        return (
            <div className={`btn-group ${this.props.cssClass || ''}`}
                data-toggle="buttons">
                {this.props.children}
            </div>
        );
    }
}

export default PictoToolbar;