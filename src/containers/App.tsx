import * as React from "react";

import * as d3 from "d3";
import * as _ from "lodash";
// import * as Infinite from "react-infinite";

import D3List from "./D3List"

// var Infinite = require("react-infinite");


export interface AppState {
    gestalts: Array<{ id: string, text: string }>
}


export interface AppProps extends React.Props<App> {
}


export default class App extends React.Component<AppProps, AppState> {

    static currId: number = 0

    constructor(props) {

        super(props);
        this.state = {
            gestalts: _.times(3000, (i) => {
                return {
                    id: App.GenUID(),
                    text: "hi"
                }
            })
        }

        //    this.state = initState

    }

    static GenUID = (): string => {
        return "id" + App.currId++
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
                data={this.state.gestalts}
                addNum={() => this.setState((prevState) => {
                    return {
                        gestalts: [{
                            id: App.GenUID(),
                            text: "yooooo"
                        }].concat(prevState.gestalts)
                    }
                }) }
                />


        </div>)


    }
}
