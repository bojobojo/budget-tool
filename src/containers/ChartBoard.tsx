import React, { useContext } from 'react';
import PieChart from '../components/PieChart';
import { compareDate } from '../util';
import { Store ,IValue} from '../Store';
import { getCatesMapping } from '../util';
import "./ChartBoard.css";
import ICategory from '../interfaces/ICategory';
const ChartBoard = () => {
    const { state }: IValue = useContext(Store);
    const { items, categories, date } = state;
    const filteredItems = items.filter(item => compareDate(date, item.date));
    const catesMapping = getCatesMapping(categories);
    let colorArr: string[] = [];
    let dataArr: number[] = [];
    let labelArr: string[] = [];
    
    const costsByCategory = new Map<ICategory, number>();
    
    if (catesMapping) { 
        filteredItems.forEach(item => {
            let temp = costsByCategory.get(catesMapping[item.cid]);
            if (!temp) temp = 0;
            costsByCategory.set(catesMapping[item.cid], temp + item.amount);
        });
            costsByCategory.forEach((value: number, key: ICategory) => {
        labelArr.push(key.name);
        colorArr.push(key.color);
        dataArr.push(value);
     });
    }


    
    


    return <section className="visualization">
        <PieChart dataArr={dataArr} lableArr={labelArr} colorArr={colorArr}/>
    </section>
}
export default ChartBoard;