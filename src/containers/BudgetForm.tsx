import React, { useContext, useState } from 'react';
import CategoryBoard from './CategoryBoard';
import DatePicker from './DatePicker';
import { Store, IValue } from '../Store';

import { BudgetType } from '../Consts';
import { dateToDateStr, generateUUID} from '../util';
// a budget form that can submit a new item to the db
// 1.CategoryBoard
// 2.DetailForm

const BudgetForm = () => {
    const [cid, setCid] = useState('');
    const [title, setTitle] = useState(''); 
    const [amount, setAmout] = useState(0);
    const { state, dispatch }: IValue = useContext(Store);
    
    const { categories } = state;

    const [bType, setBType] = useState(BudgetType.INCOME);
    let filteredCategories = categories.filter(c => c.type === bType);
    return <form className="bg-white br3 pa2 shadow-1" onSubmit={e => {
        e.preventDefault();
        const newItem = {
            cid, title, amount, date: dateToDateStr(state.date)
        };
        dispatch({ type: "ADD", payload: newItem })
        
    }}>
        <CategoryBoard categories={filteredCategories} bType={bType} setBType={setBType} cid={cid} setCid={setCid} />
        <DatePicker />
        <div className="flex flex-column pa1 ">
            <div className="flex justify-between items-center pa1">
                <label htmlFor="title" className="db f4 mh1 w-20 fw5">Note</label>
                <input className="db flex-auto pa1 f4" placeholder="write some notes..." value={title} onChange={(e) => { setTitle(e.target.value)}} type="text" name="title" id="title" />
            </div>
            <div className="flex justify-between items-center pa1">
                <label htmlFor="amount" className="db f4 mh1 w-20 fw5">$</label>
                <input className="db flex-auto pa1 f4" value={amount} onChange={e => { setAmout(parseInt(e.target.value))}} type="number" name="amount" id="amount" min="0" />

            </div>

            <button className="pv2 mv2 w-20 center bg-blue pointer" type="submit"><span className="fw1 f3 white">+</span></button>
        </div>
        

    </form>
}
export default BudgetForm;