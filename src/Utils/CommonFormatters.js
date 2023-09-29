export const DateFormatter = (date) => {
    //formate date into like sepetmber 12, 2021
    if(!date) return ('');
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return (`${mo} ${da}, ${ye}`);
}