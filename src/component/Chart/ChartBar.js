import React from "react";
import './ChartBar.css';


const ChartBar = props => {
let barFillHEight='0%';

if(props.max>0){
    barFillHEight =math.round((props.value/props.maxvalue)*100)
}


    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
        </div>
        <div className="chart-bar__lable">{props.lable}</div>
    </div>
}
export default ChartBar;