import React, { useState } from 'react';
import './BudgetSlider.css';
import ICategory from '../interfaces/ICategory';
type Props = {
    category: ICategory;
}
const BudgetSlider = ({ category }: Props )=> { 
    const [value, setvalue] = useState(0);
    const fontColor = {"color":category.color }
    return <div>
        <div className="row flex items-center slidecontainer">
            <label className="w-30 f7 fw6 f5-ns" style={fontColor} htmlFor="digit">{category.name}</label>
            
            <input className="mh1 slider flex-auto" onChange={e => setvalue(parseInt(e.target.value))} type="range" id="digit" min="10" max={category.budget} value={value} />
            <span className="fw7 pl2 f6 f5-ns">$</span><input className="pa1 w-30 w-20-ns ma2 tc" type="number" name="" value={value} onChange={e => setvalue(parseInt(e.target.value))} />
            
        </div>
        
        
    </div>
}
export default BudgetSlider;