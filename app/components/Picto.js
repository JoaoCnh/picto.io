import React from 'react';
import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';

import { init, reset, setColor, press, drag, release, cancel } from '../actions/pictoActions';

@connect((store) => {
    return {
        canvas: store.picto.canvas,
        context: store.picto.context,
        paint: store.picto.paint,
        clickX: store.picto.clickX,
        clickY: store.picto.clickY,
        clickSize: store.picto.clickSize,
        clickDrag: store.picto.clickDrag,
        clickColor: store.picto.clickColor,
        currentColor: store.picto.currentColor,
        availableColors: store.picto.availableColors,
    };
})
class Picto extends React.Component {
    componentDidMount() {
        this.props.dispatch(init());
    }
    _reDraw() {
        var radius;

        this.props.context.clearRect(0, 0, this.props.canvas.width, this.props.canvas.height);

        this.props.context.lineJoin = "round";

        for(var i=0; i < this.props.clickX.length; i++) {
            switch (this.props.clickSize[i]) {
              case "small":
                radius = 2;
                break;
              default:
              case "normal":
                radius = 5;
                break;
              case "large":
                radius = 10;
                break;
              case "huge":
                radius = 20;
                break;
            }

            this.props.context.beginPath();
            if(this.props.clickDrag[i] && i){
                this.props.context.moveTo(this.props.clickX[i-1], this.props.clickY[i-1]);
            }else{
                this.props.context.moveTo(this.props.clickX[i]-1, this.props.clickY[i]);
            }
            this.props.context.lineTo(this.props.clickX[i], this.props.clickY[i]);
            this.props.context.closePath();
            this.props.context.strokeStyle = this.props.clickColor[i];
            this.props.context.lineWidth = radius;
            this.props.context.stroke();
        }
    }
    _clearCanvas(event) {
        event.preventDefault();
        this.props.context.clearRect(0, 0, this.props.canvas.width, this.props.canvas.height);
        this.props.dispatch(reset());
    }
    _setColor(color) {
        this.props.dispatch(setColor(color.hex));
    }
    _handlePress(event) {
        this.props.dispatch(press(event, event.target));
        this._reDraw();
    }
    _handleDrag(event) {
        if (this.props.paint) {
            this.props.dispatch(drag(event, event.target));
            this._reDraw();
        }
    }
    _handleRelease() {
        this.props.dispatch(release());
        this._reDraw();
    }
    _handleCancel() {
        this.props.dispatch(cancel());
    }
    render() {
        return (
            <div className="col s3">
                <canvas id="picto" onMouseDown={this._handlePress.bind(this)}
                    onMouseMove={this._handleDrag.bind(this)} onMouseUp={this._handleRelease.bind(this)}
                    onMouseLeave={this._handleCancel.bind(this)}></canvas>
                <a href="#" id="clear-canvas" className="waves-effect waves-light btn"
                    onClick={this._clearCanvas.bind(this)}>
                    <i className="material-icons">clear</i>
                </a>
                <CirclePicker color={this.props.currentColor}
                    onChangeComplete={this._setColor.bind(this)}
                    colors={this.props.availableColors} />
            </div>
        );
    }
}

export default Picto;