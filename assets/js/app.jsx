import React from "react";
import MainCenter from "./main-center";
import {API_ROOT} from "./config";
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import Loading from "./basics/loading";

if (!window.Promise) {
    window.Promise = Promise;
}

require("../scss/app.scss");
let classNames = require('classnames');

const initialState = {
    fetching: false,
    welcomeText: "Are you here?"
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.reset = this.reset.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    reset() {
        this.setState(initialState);
    }

    handleClick() {
        this.setState({
            fetching: true
        });
        fetch(`${API_ROOT}/`)
            .then(response => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }
                return response
            })
            .then(data => data.json())
            .then(data => {
                this.setState({
                    welcomeText: data,
                    fetching: false,
                });
            })
    }

    render() {
        return (
            <div>
                <MainCenter welcomeText={this.state.welcomeText}
                            handleClick={this.handleClick}/>
                <div className={classNames({
                    "flex-container-center": true,
                    "hidden": !this.state.fetching
                })}>
                    <Loading onTop={true}/>
                </div>
            </div>
        );
    }
}
