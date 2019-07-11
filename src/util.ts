import ICategory from './interfaces/ICategory';

export function tabLeft(num: number): string {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}
export function getDateStr(date: Date): string {
    return `${date.getFullYear()}-${tabLeft(date.getMonth() + 1)}-${tabLeft(date.getDate())}`;
}

export function extractYearAndMonth(dateStr: string): string {
    return dateStr.substring(0, dateStr.lastIndexOf('-'));
}
export function tabSign(num: number): string {
    if (num < 0) {
        return '-$' + (-num);
    } else {
        return '+$' + num;
    }
}
export function compareDate(date: Date, dateStr: string): boolean { 
    const dateArr: string[] = dateStr.split('-');
    const year = dateArr[0];
    const month = dateArr[1];
    return '' + date.getFullYear() === year && tabLeft(date.getMonth()+1)  === month;

}
export function dateToDateStr(date: Date): string { 
    return date.getFullYear() + '-' + tabLeft(date.getMonth()+1) + '-' + tabLeft(date.getDate());
}


export function getCateById(id: string, categories: ICategory[]): ICategory|null { 
    let ans = null;
    categories.forEach(c => {
        if (c.id === id) {
            ans = c;
        }
    });
    return ans;
    
    
}

export function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export const getCatesMapping = (categories: ICategory[]) => {
    const newObj: any = {
    };
    if (categories.length !== 0) { 
        categories.forEach(cat => newObj[cat.id] = cat);
        return newObj;
    }
    return null;
    
    
};

