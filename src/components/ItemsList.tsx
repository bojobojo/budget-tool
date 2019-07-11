import React, { useContext } from 'react';
import { Store, IValue } from '../Store';
import IItem from '../interfaces/IItem';
import Item from './Item';
import { compareDate } from '../util';
type ItemsListProps = {
    items: IItem[];
}
function ItemsList(): JSX.Element {
    const { state }: IValue = useContext(Store);
    const { date } = state;
    const { items } = state;
    
    const filteredItems = items.filter(item => compareDate(date, item.date));

    return (
        <div>
            {filteredItems.map(item => <Item key={item.id} item={item} />)}
        </div>
    )
    
}
export default ItemsList;