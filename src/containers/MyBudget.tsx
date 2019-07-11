import React from 'react';
import { StoreProvider, Store,IValue } from '../Store';
import TotalBoard from '../components/TotalBoard';
import "tachyons";
import ItemsList from '../components/ItemsList';
import DatePicker from './DatePicker';
import BudgetForm from './BudgetForm';
import Header from '../layouts/Header';
import ChartBoard from './ChartBoard';
import BudgetSliderGroup from './BudgetSliderGroup';

function MyBudget(): JSX.Element {
    
    
    return (
        
        <StoreProvider>
            <Header />
            <main className="main-container pa2 pa4-l">
                <section className="fl-l w-60-l pa2-l ">
                    
                    <TotalBoard />
                    <div className="bg-white pa3 mv2 br3 shadow-1">
                        <DatePicker />
                        <ItemsList />
                    </div>
                    <BudgetSliderGroup/>  
                    
                </section>
                <section className="fl-l w-40-l pa2-l">
                    <BudgetForm />
                    <ChartBoard />
                </section>
            </main>
            

        </StoreProvider>



    );
}

export default MyBudget;
