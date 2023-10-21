//create function that accpet url and apply seraach filter on the data and return the filtered data
export const searchFilter = (url, searchValue) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      return filteredData;
    });
};
