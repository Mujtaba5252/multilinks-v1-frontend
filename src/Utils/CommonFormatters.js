import {ToWords} from 'to-words';
export const numeric_to_word = (num) => {
    if(num && !isNaN(num)){
        const toWords=new ToWords({
            localeCode: 'en-AE',
        });
        return toWords.convert(num,{currency: true,ignoreDecimal: true});
    }
    else if(isNaN(num)){
        return '';
    }
    else if(num === 0){
        return null;
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
    if(isNaN(amount)){
        return '';
    }
    else if(amount === 0){
        return 'AED 0.00';
    }
    const formatter = new Intl.NumberFormat('en-AE', {
        style: 'currency',
        currency: 'AED',
        minimumFractionDigits: 2
    });
    return formatter.format(amount);
}
//camel case formatter
export const camelCaseFormatter = (str) => {
    if(!str) return '';
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
}