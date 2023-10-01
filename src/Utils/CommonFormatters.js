import {ToWords} from 'to-words';
export const numeric_to_word = (num) => {
    if(num && !isNaN(num)){
        const toWords=new ToWords();
        return toWords.convert(num,{currency: true,ignoreDecimal: true});
    }
    else if(isNaN(num)){
        return '';
    }
    else{
        return "Invalid Number";
    }
}
export const DateFormatter = (date) => {
    //formate date into like sepetmber 12, 2021
    if(!date) return ('');
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return (`${mo} ${da}, ${ye}`);
}
//AED currency formatter
export const CurrencyFormatter = (amount) => {
    if(!amount) return ('');
    //formate amount into like AED 1,000.00
    const formatter = new Intl.NumberFormat('en-AE', {
        style: 'currency',
        currency: 'AED',
        minimumFractionDigits: 2
    });
    return formatter.format(amount);
}