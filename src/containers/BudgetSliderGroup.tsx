import React, { useContext}from 'react';
import BudgetSlider from './BudgetSlider';
import { Store, IValue } from '../Store';
import './BudgetSliderGroup.css';

const BudgetSliderGroup = () => { 
    const { state, dispatch }: IValue = useContext(Store);
    const { categories} = state;
    return <div className="shadow-1 pa3 mv2 ph4-ns br3 bg-dark">
        {categories.map(category => <BudgetSlider key={category.id} category={category} />)}
    </div>

}
export default BudgetSliderGroup;