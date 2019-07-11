import ICategory from './interfaces/ICategory';
import { COLORS } from './Consts';
export const itemsData = [
    {
        "title": "buy stuff for kitten",
        "amount": 100,
        "date": "2019-05-15",
        "monthCategory": "2018-8",
        "id": "_kly1klf4g",
        "cid": "1",
        "timestamp": 1534291200000
    },
    {
        "title": "Salary",
        "amount": 2000,
        "date": "2019-05-18",
        "monthCategory": "2019-8",
        "id": "_bd16bjeen",
        "cid": "2",
        "timestamp": 1534550400000
    },
    {
        "title": "Hang out with friends",
        "amount": 300,
        "date": "2019-05-20",
        "monthCategory": "2019-8",
        "id": "_jjfice21k",
        "cid": "3",
        "timestamp": 1534723200000
    },
    {
        "title": "Financial Income",
        "amount": 1000,
        "date": "2019-05-11",
        "monthCategory": "2019-8",
        "id": "_1fg1wme63",
        "cid": "11",
        "timestamp": 1533945600000
    },
    {
        "title": "Financial Income II",
        "amount": 300,
        "date": "2019-06-15",
        "monthCategory": "2019-11",
        "id": "_qryggm5y8",
        "cid": "12",
        "timestamp": 1534291200000
    },
    {
        "title": "Dinner CFA",
        "amount": 300,
        "date": "2019-06-15",
        "monthCategory": "2019-11",
        "id": "_qryggm511",
        "cid": "3",
        "timestamp": 1534291200000
    }
]


export const catesData: ICategory[] = [
    {
        "name": "Transportation",
        "id": "1",
        "type": "expense",
        "budget":100,
        "color":COLORS.blue,
    },
    {
        "name": "Food",
        "id": "2",
        "type": "expense",
        "budget":1500,
        "color":COLORS.green,
    },
    {
        "name": "Shopping",
        "id": "3",
        "type": "expense",
        "budget":500,
        "color":COLORS.orange,
    },
    {
        "name": "Digital",
        "id": "4",
        "type": "expense",
        "budget":300,
        "color":COLORS.grey,
    },
    {
        "name": "Salary",
        "id": "10",
        "type": "income",
        "budget":5000,
        "color":COLORS.purple,
    },
    {
        "name": "Part-time",
        "id": "11",
        "type": "income",
        "budget":1000,
        "color":COLORS.yellow,
    },
    {
        "name": "Stock",
        "id": "12",
        "type": "income",
        "budget":2000,
        "color":COLORS.lightblue,
    },
]
