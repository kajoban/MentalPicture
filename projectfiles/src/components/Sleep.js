import React, { Component } from 'react';
import BarGraph from "./BarGraph"

class Sleep extends Component {
    state ={
        data: this.props.data,
        title: "Sleep",
        yAxis: "Hours",
        xAxis: "Date"
    }

    render(){
        return(
            <BarGraph input={this.state}/>
        )
    }

}

export default Sleep;