import React from 'react';
import ICategory from '../interfaces/ICategory';
import CategoryItem from './CategoryItem';
type CategoriesListProps = {
    categories: ICategory[];
    cid: string,
    setCid:any,
}

const CategoriesList = ({ categories, cid, setCid }: CategoriesListProps) => { 
    return <div className="cates-list flex flex-wrap tc">
        {categories.map(c => <CategoryItem cid={cid} key={c.id} category={c} setCid={setCid}/>)}
    </div>
}
export default CategoriesList;