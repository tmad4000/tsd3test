import * as React from "react";

import * as d3 from "d3";


// export interface ListViewState {


export interface AppProps extends React.Props<App> {

}


export default class App extends React.Component<AppProps, undefined> {
    mountPoint: HTMLElement

    constructor(props) {

        super(props);

        //    this.state = initState

    }

    componentDidMount() {
        let numbers = [15, 8, 42, 4];

        const d3MountPoint=d3.select(this.mountPoint)

        let sel = d3MountPoint.selectAll("p")


        let datSel = sel.data(numbers)
            .text((d) => d)

        let enterSel = datSel.enter()
        enterSel.append("p")
            .text((d) => d)

        let exitSel = sel.exit()
        exitSel.remove()

        d3MountPoint.selectAll("p").style("border", "1px solid black")

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



        return (<div>
            Title
            <div ref={mountPoint => this.mountPoint = mountPoint} >
                <p>uu</p>
            </div>


        </div>)


    }
}
