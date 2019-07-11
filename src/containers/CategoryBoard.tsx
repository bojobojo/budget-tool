import React, { useState, useContext } from 'react';
import { BudgetType } from '../Consts';

import  ICategory from '../interfaces/ICategory';
import CategoriesList from '../components/CategoriesList';

type CategoryBoardProps = {
    categories: ICategory[],
    bType: BudgetType,
    setBType: any,
    cid: string,
    setCid:any,
        
}
const CategoryBoard = ({ categories, bType, setBType, cid, setCid }: CategoryBoardProps) => { 
    
    return <>
        <div className="flex justify-between tc fw7 f6  ">
            <div onClick={() => { setBType(BudgetType.INCOME) }} className={` type-button flex-auto ${bType === BudgetType.INCOME ? 'bg-green shadow-1 white' : 'green'}  pv3  pointer`}> INCOME
        </div>
            <div onClick={() => { setBType(BudgetType.EXPENSE) }} className={`  type-button flex-auto ${bType === BudgetType.EXPENSE ? 'bg-red shadow-1 white' : 'red'}  pv3 pointer`}>EXPENSE</div>
        </div>
        <CategoriesList categories={categories} cid={cid} setCid={setCid} />
       <hr className="w-90"/>
        </>
}
export default CategoryBoard;