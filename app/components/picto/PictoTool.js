import React from 'react';

class PictoTool extends React.Component {
    _handleClick(event) {
        this.props.clickHandler(event.target.id);
    }
    render() {
        let isCurrentItem = this.props.title === this.props.currentItem;
        let extraCss = this.props.cssClass || '';
        let currentItemCssClass = isCurrentItem ? `btn picto-tool active ${extraCss}`
            : `btn picto-tool ${extraCss}`;

        return (
            <label className={currentItemCssClass} title={this.props.title}>
                <input id={this.props.title} type="radio" autoComplete="off"
                    defaultChecked={isCurrentItem}
                    onClick={this._handleClick.bind(this)} />
                <i className={`fa fa-${this.props.icon}`}></i>
            </label>
        );
    }
}

export default PictoTool;