import { BudgetType} from '../Consts';
export default interface ICategory{
    name: string,
    id: string,
    type: BudgetType | string,
    budget: number;
    color: string;
    
}