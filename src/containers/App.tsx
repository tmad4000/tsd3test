import * as React from "react";

import * as d3 from "d3";
import * as _ from "lodash";
// import * as Infinite from "react-infinite";

import D3List from "./D3List"

// var Infinite = require("react-infinite");


export interface AppState {
    numbers?: number[]
}


export interface AppProps extends React.Props<App> {
}


export default class App extends React.Component<AppProps, AppState> {

    constructor(props) {

        super(props);
        this.state = {
            numbers: _.times(3000, () => 3)
        }

        //    this.state = initState

    }


    render() {

        // <ul id="list">
        //     <Infinite containerHeight={400} elementHeight={20}>
        //         <li height="20">uu</li>
        //     </Infinite>
        // </ul>


        return (<div>
            Titleasd faadsfa
            <D3List
                data={this.state.numbers}
                addNum={() => this.setState((prevState) => {
                    return { numbers: [888].concat(prevState.numbers) }
                }) }
                />


        </div>)


    }
}
