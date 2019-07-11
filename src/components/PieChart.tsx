import React from 'react';
import { Pie } from 'react-chartjs-2';
import { COLORS } from '../Consts';
import "./PieChart.css";

type PieChartProps = {
    lableArr: string[],
    dataArr: number[],
    colorArr:string[],
}
const PieChart = ({ lableArr, dataArr,colorArr }: PieChartProps) => {
    let data = {
        datasets: [{
            data: dataArr,
            backgroundColor:colorArr
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: lableArr,

        

    };
    let options={
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },

        }
    }
    // const ctx = document.getElementById('myChart').getContext('2d');
    return <div className="chart-panel bg-white pa2 mv3 br3 shadow-1">
        <main className="pa3 flex-column">
            <div className="">< Pie data={data} options={options} /></div>


        </main>

    </div>
}
export default PieChart;