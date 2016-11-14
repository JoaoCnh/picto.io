import React from 'react';
import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';
import _ from 'lodash';

import PictoToolbar from './picto/PictoToolbar';
import PictoTool from './picto/PictoTool';

import DrawAPI from '../util/draw';

import {
    init,
    reset,
    setColor,
    press,
    drag,
    release,
    cancel,
    changeTool,
    changeSize,
} from '../actions/pictoActions';

@connect((store) => {
    return {
        picto: store.picto,
        socket: store.app.socket,
        paint: store.picto.paint,
        clickX: store.picto.clickX,
        clickY: store.picto.clickY,
        clickSize: store.picto.clickSize,
        clickDrag: store.picto.clickDrag,
        clickColor: store.picto.clickColor,
        currentColor: store.picto.currentColor,
        currentSize: store.picto.currentSize,
        currentTool: store.picto.currentTool,
        availableColors: store.picto.availableColors,
    };
})
class Picto extends React.Component {
    componentDidMount() {
        console.log("GONNA MOUNT PICTO");
        let canvasContainer = document.getElementById('canvas-container');

        this.canvas = document.getElementById('picto');
        this.canvas.width = canvasContainer.offsetWidth;
        this.canvas.height = canvasContainer.offsetHeight;
        this.context = this.canvas.getContext('2d');

        this._reDraw();
    }
    _reDraw() {
        DrawAPI.reDraw({
            clickX: this.props.clickX,
            clickY: this.props.clickY,
            clickSize: this.props.clickSize,
            clickDrag: this.props.clickDrag,
            clickColor: this.props.clickColor,
        }, this.canvas, this.context);
    }
    _clearCanvas(event) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.props.dispatch(reset({socket: this.props.socket}));
    }
    _setColor(color) {
        this.props.dispatch(setColor(color.hex, {socket: this.props.socket}));
    }
    _handlePress(event) {
        this.props.dispatch(press(event, event.target, {
            socket: this.props.socket,
            picto: this.props.picto,
        }));

        this._reDraw();
    }
    _handleDrag(event) {
        if (this.props.paint) {
            this.props.dispatch(drag(event, event.target, {
                socket: this.props.socket,
                picto: this.props.picto,
            }));

            this._reDraw();
        }
    }
    _handleRelease() {
        this.props.dispatch(release({
            socket: this.props.socket,
            picto: this.props.picto,
        }));

        this._reDraw();
    }
    _handleCancel() {
        if (this.props.paint) {
            this.props.dispatch(cancel());
        }
    }
    _handleToolChange(tool) {
        this.props.dispatch(changeTool(tool, {socket: this.props.socket}));
    }
    _handleSizeChange(size) {
        this.props.dispatch(changeSize(size, {socket: this.props.socket}));
    }
    render() {
        console.log("GONNA RENDER PICTO");
        return (
            <div id="canvas-container">
                <canvas id="picto"
                    onMouseDown={this._handlePress.bind(this)}
                    onMouseMove={this._handleDrag.bind(this)}
                    onMouseUp={this._handleRelease.bind(this)}
                    onMouseLeave={this._handleCancel.bind(this)}></canvas>

                    <div className="card">
                        <div className="card-block">
                            <CirclePicker color={this.props.currentColor}
                                onChangeComplete={this._setColor.bind(this)}
                                colors={this.props.availableColors}
                                width={'101%'} />
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary"
                                onClick={this._clearCanvas.bind(this)}>
                                <i className="fa fa-remove"></i>
                            </button>

                            <PictoToolbar>
                                <PictoTool title="pen" currentItem={this.props.currentTool}
                                    icon="pencil picto-tool-pen"
                                    clickHandler={this._handleToolChange.bind(this)} />
                                <PictoTool title="eraser" currentItem={this.props.currentTool}
                                    icon="eraser picto-tool-eraser"
                                    clickHandler={this._handleToolChange.bind(this)} />
                            </PictoToolbar>

                            <PictoToolbar cssClass="pull-right">
                                <PictoTool title="small" currentItem={this.props.currentSize}
                                    icon="circle picto-size-small"
                                    clickHandler={this._handleSizeChange.bind(this)} />
                                <PictoTool title="normal" currentItem={this.props.currentSize}
                                    icon="circle fa-2x picto-size-normal"
                                    clickHandler={this._handleSizeChange.bind(this)} />
                                <PictoTool title="large" currentItem={this.props.currentSize}
                                    icon="circle fa-3x picto-size-large"
                                    clickHandler={this._handleSizeChange.bind(this)} />
                                <PictoTool title="huge" currentItem={this.props.currentSize}
                                    icon="circle fa-4x picto-size-huge"
                                    clickHandler={this._handleSizeChange.bind(this)} />
                            </PictoToolbar>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Picto;