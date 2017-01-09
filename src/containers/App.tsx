import * as React from "react";

import * as d3 from "d3";
import * as _ from "lodash";
// import * as Infinite from "react-infinite";
var Infinite = require("react-infinite");


// export interface ListViewState {


export interface AppProps extends React.Props<App> {

}


export default class App extends React.Component<AppProps, undefined> {
    mountPoint: HTMLElement
    numbers: number[] = _.times(3000, () => 3);


    constructor(props) {

        super(props);

        //    this.state = initState

    }

    componentDidMount() {

        const d3MountPoint = d3.select(this.mountPoint)

        let update = () => {
            let sel = d3MountPoint.select("#list").selectAll("li")


            let datSel = sel.data(this.numbers)
                .text((d) => d).style("border", "1px solid black")

            let enterSel = datSel.enter()
            enterSel.append("li")
                .text((d) => d).style("border", "1px solid black")

            let exitSel = sel.exit()
            exitSel.remove()

            d3MountPoint.select("#list").selectAll("li").style("border", "1px solid black")

        }

        d3MountPoint.select("#append").on("click", () => {
            this.numbers.unshift(8)
            update()
        }
        )

        update()

        //     .data([4, 8, 15, 16, 23, 42])
        // // .text(function (d) { return d; });

        // p.data([1])

        // // Enter…
        // p.enter().append("p")
        //     .text(function (d) { return d; }).style("border:1px solid black");
        // // Exit…
        // p.exit().remove();


    }



    render() {

                // <ul id="list">
                //     <Infinite containerHeight={400} elementHeight={20}>
                //         <li height="20">uu</li>
                //     </Infinite>
                // </ul>


        return (<div>
            Titleasd fa
            <div ref={mountPoint => this.mountPoint = mountPoint} >
                <button id="append">Append</button>
                <ul id="list">
                        <li height="20">uu</li>
                </ul>

            </div>


        </div>)


    }
}
