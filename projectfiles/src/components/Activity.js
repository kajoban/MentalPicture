import React, { Component } from 'react';
import * as d3 from 'd3';
import BarGraph from "./BarGraph";

class Activity extends Component {
    state ={
        data: this.props.data,
        title: "Exercise",
        yAxis: "Hours",
        xAxis: "Date"
    }

    render(){
        return(
            <BarGraph input={this.state}/>
        )
    }

}

export default Activity;