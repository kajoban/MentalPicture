import React, { Component } from 'react';
import BarGraph from "./BarGraph"

class Diet extends Component {
    state ={
        data: this.props.data,
        title: "Diet",
        yAxis: "Calories (in thousands)",
        xAxis: "Date"
    }

    render(){
        return(
            <BarGraph input={this.state}/>
        )
    }

}

export default Diet;