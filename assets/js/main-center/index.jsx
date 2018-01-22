import React from "react";
import WelcomeBox from "./welcome-box";

require("../../scss/app.scss");
let classNames = require('classnames');

export default class MainCenter extends React.Component {
    render() {
        return (
            <div className={classNames({
                "main-center": true,
                "flex-container-center": true
            })}>
                <WelcomeBox welcomeText={this.props.welcomeText}
                            handleClick={this.props.handleClick}/>
            </div>
        );
    }
}
