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
            gestalts: _.times(300, (i) => {
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
            Title

            <div style={{ "border": "1px solid black", float: "right", width: 200, height: 400 }}>
                <b>State:</b>
                {this.state.gestalts.map((g, i) => <div key={i}>{g.text}</div>)}
            </div>

            <D3List
                data={this.state.gestalts}
                updateGestalt={(id: string, text: string) => {
                    console.log(text)
                    this.setState((prevState) => {
                        const newGs = prevState.gestalts.slice()

                        const foundIdx: number = newGs.findIndex((e) => e.id === id)

                        newGs[foundIdx] = { ...newGs[foundIdx], text: text }

                        return {
                            gestalts: newGs
                        }
                    })
                }
                }

                addGestalt={() => this.setState((prevState) => {
                    return {
                        gestalts: [{
                            id: App.GenUID(),
                            text: "yooooo"
                        }].concat(prevState.gestalts)
                    }
                })}
            />


        </div>)


    }
}
