import React from "react";
import {Button} from "react-bootstrap";

require("../../../scss/app.scss");
let classNames = require('classnames');

export default class StandardButton extends React.Component {
    render() {
        return (
            <div className={classNames("welcome-box-item", "flex-container-center")}>
                <Button className={"welcome-button"}
                        bsSize="large"
                        bsStyle={this.props.style}
                        onClick={this.props.handleClick}>
                    {this.props.text}
                </Button>
            </div>
        );
    }
}
