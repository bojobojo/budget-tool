import React,{useContext} from 'react';
import { tabSign } from '../util';
import "./TotalBoard.css";
import {  Store, IValue } from '../Store';
import "tachyons";
import { getCateById } from '../util';
import { BudgetType } from '../Consts';
// type TotalBoardProps={
//     income: number;
//     expense: number;
// }

const TotalBoard = () => {
    const { state }: IValue = useContext(Store);
    const { items ,categories} = state;
    let income = 0;
    let expense = 0;
    items.forEach(item => {
        const c = getCateById(item.cid, categories);
        if (c && c.type === BudgetType.INCOME) {
            income += item.amount;
        } else if (c && c.type === BudgetType.EXPENSE) {
            expense += item.amount;
        }
    });
    
    return <div className="total-board pa3 flex-column justify-around f3 tc bg-white br3 shadow-1">
        <div className={'pv2'}> <span className={`${income >= expense ? 'green' : 'red'} f0`}> {tabSign(income - expense)}</span> </div>
        <div> <span className="f4 fw2">Banlance</span></div>
        <div className="pv2 income green flex justify-between"><span className=" black-80 block">Income</span> <span className=" tr">{tabSign(income)}</span> </div>
        <div className="pv2 expense red flex justify-between"><span className=" black-80 block">Expense</span>  <span className=" tr">{tabSign(-expense)}</span></div>
    </div>
}
export default TotalBoard;