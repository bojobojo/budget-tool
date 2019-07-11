import React, { useContext } from 'react';
import { Store, IValue } from '../Store';
import IItem from '../interfaces/IItem';
import { tabSign } from '../util';
type ItemProps = {
    item: IItem;

}
function Item({ item }: ItemProps): JSX.Element {
    const { dispatch }: IValue = useContext(Store);
    return <div className="bb b--light-silver flex tl justify-between items-center pa1  black f6">

        <span className="flex-auto">{item.title}</span>
        <span className="fw4 pl2 w-20">${item.amount}</span>
        <span className="tc w-20 tc">{item.date.slice(5)}</span>
        {/* <div className="dn db-ns w-20">{catesWithId[item.cid].name}</div> */}

        <div onClick={() => { dispatch({ type: 'ADD', payload: 'add' }) }}><i className="fas fa-edit pa2 dim pointer"></i></div>

        <div onClick={() => { dispatch({ type: 'DEL', payload: item.id }) }}><i className="pa2 fas fa-trash-alt pointer dim"></i></div>
    </div>
}
export default Item;