export const searchFilter = (data, search) => {
    return data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
    });
}