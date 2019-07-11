import React from 'react';
import ICategory from '../interfaces/ICategory';
import "./CategoryItem.css"
type CategoryItemProps = {
    category: ICategory,
    cid: string,
    setCid: any,
}



const CategoryItem = ({ category, cid, setCid }: CategoryItemProps) => {

    return <div onClick={() => { setCid(category.id) }} className={` raisedbox shadow-1 black-80 ${cid === category.id ? ' bg-light-blue' : 'not-select-bg black'}  flex f6 br4 fw4 ma2 pa1 pointer items-center`}>
        <div style={{ "background": category.color }} className="color_marker ma1"></div>
        <span className="ph1 f6">{category.name}</span>
    </div >

}
export default CategoryItem;