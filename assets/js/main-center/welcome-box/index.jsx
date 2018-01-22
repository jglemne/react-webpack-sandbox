import React from "react";
import StandardButton from "../../basics/standard-button";

require("../../../scss/app.scss");
let classNames = require('classnames');

export default class WelcomeBox extends React.Component {
    render() {
        return (
            <div className={classNames({
                "welcome-box": true,
                "flex-container-center": true,
            })}>
                <div className={"flex-container-center-column"}>
                    <div className={classNames("welcome-box-item", "flex-container-center")}>
                        {this.props.welcomeText}
                    </div>
                    <StandardButton text={"I'm here!"}
                                    style={"danger"}
                                    handleClick={this.props.handleClick}/>
                </div>
            </div>
        );
    }
}
