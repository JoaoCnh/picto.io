import React from 'react';

class PictoTool extends React.Component {
    _handleClick(event) {
        event.stopPropagation();
        this.props.clickHandler(event.target.dataset.value);
    }
    render() {
        let isCurrentItem = this.props.title === this.props.currentItem;
        let extraCss = this.props.cssClass || '';
        let currentItemCssClass = isCurrentItem ? `btn picto-tool active ${extraCss}`
            : `btn picto-tool ${extraCss}`;

        return (
            <label data-value={this.props.title} className={currentItemCssClass}
                title={this.props.title} onClick={this._handleClick.bind(this)}>
                <input type="radio" autoComplete="off"
                    defaultChecked={isCurrentItem} data-value={this.props.title}
                    onClick={this._handleClick.bind(this)} />
                <i className={`fa fa-${this.props.icon}`}
                    data-value={this.props.title}
                    onClick={this._handleClick.bind(this)}></i>
            </label>
        );
    }
}

export default PictoTool;