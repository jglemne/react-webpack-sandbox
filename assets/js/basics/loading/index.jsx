import React from "react";

require("../../../scss/app.scss");
let classNames = require('classnames');

export default class Loading extends React.Component {
    render() {
        return (
            <div className={classNames({
                "loading-image": true,
                "highest-z": this.props.onTop
            })}/>
        );
    }
}