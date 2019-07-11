import React, { useReducer, useEffect } from 'react';
import IItem from './interfaces/IItem';
import ICategory from './interfaces/ICategory';
import { itemsData, catesData } from './data';
import { db } from './configs/firebase';
interface IState { 
    items: IItem[];
    categories: ICategory[];
    date: Date;
}

export interface IAction {
    type: string;
    payload: any;
}
export interface IValue{
    state: IState,
    dispatch: React.Dispatch<IAction>
}
const initialState: IState = {
    items: [],
    categories: [],
    date: new Date(),
}


export const Store = React.createContext<IState | any>(initialState);
function reducer(state: IState, action: IAction): IState {
    let items = state.items.slice();
    switch (action.type) {
        case "ADD":
            // items.push(action.payload);
            console.log(action.payload);
            db.collection("items").add(action.payload).then(res => {
                console.log(res);
            });
            return {...state, items};
        case "DEL":
            db.collection("items").doc(action.payload).delete().then((res) => {
                console.log(`${action.payload} was deleted`);
            });

            return { ...state, items: items.filter(item => item.id !== action.payload) };
            
        case "CHANGE_DATE":
            return { ...state, date: action.payload };
        case "LOAD_ITEMS":
            // load data from the firebase
            return { ...state, items: action.payload };
        case "LOAD_CATES":
            return { ...state, categories: action.payload };
        default:
            return state;
    }
}

export function StoreProvider(props: any): JSX.Element {

    const [state, dispatch] = useReducer(reducer, initialState);
    const value: IValue = { state, dispatch }
    

    useEffect(() => {
        const unsubscribeItems = db.collection("items").onSnapshot((snapshot => {
            const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            
            dispatch({ type: 'LOAD_ITEMS', payload: items });
        }));
        return () => unsubscribeItems();
    }, []);
    useEffect(() => {
        const unsubscribeCates = db.collection("categories").onSnapshot((snapshot => {
            const categories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            dispatch({ type: 'LOAD_CATES', payload: categories });
        }));
        return () => {
            unsubscribeCates();
        };
    }, []);


    return <Store.Provider value={value}>{props.children}</Store.Provider>

}