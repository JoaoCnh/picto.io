import React from 'react';
import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';

@connect((store) => {
    return {
        currentColor: store.picto.currentColor,
        availableColors: store.picto.availableColors,
    };
})
class Picto extends React.Component {
    render() {
        return (
            <div className="col s3">
                <canvas id="picto"></canvas>
                <a href="#" id="clear-canvas" className="waves-effect waves-light btn"
                    onClick={this._clearCanvas}>
                    <i className="material-icons">clear</i>
                </a>
                <CirclePicker color={this.props.currentColor}
                    onChangeComplete={this._setColor}
                    colors={this.props.availableColors} />
            </div>
        );
    }
}

export default Picto;