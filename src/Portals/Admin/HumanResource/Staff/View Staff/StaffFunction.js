import { axios_get } from "../../../../../Utils/Axios"

export const fetchStaff = async ({url,setStaffData,setPagination}) => {
    await axios_get({ url: url }).then((res) => {
      setStaffData(res.data.data)
      setPagination(res.data.pagination)
    })
  }

// split value by -
export const splitValue = (value) => {
    return value?.toString().split('-')
  }

export const subtractOneMonthFromTimestamp=(timestamp)=> {
  // Create a new Date object from the provided timestamp
  let date = new Date(timestamp);

  // Get the current month and year
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();

  // Calculate the new month
  let newMonth = currentMonth - 1;

  // Check if the new month is less than 0 (going from January to December of the previous year)
  if (newMonth < 0) {
    newMonth = 11; // December
    currentYear -= 1; // Decrement the year
  }

  // Create a new date with the calculated month and year
  let newDate = new Date(currentYear, newMonth, date.getDate());

  // Convert the new date to a Unix timestamp
  let newTimestamp = newDate.getTime();

  return newTimestamp;
}

export const addOneMonthFromTimestamp=(timestamp)=>{
  // Create a new Date object from the provided timestamp
  let date = new Date(timestamp);

  // Get the current month and year
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();

  // Calculate the new month
  let newMonth = currentMonth + 1;

  // Check if the new month is less than 0 (going from January to December of the previous year)
  if (newMonth < 0) {
    newMonth = 11; // December
    currentYear += 1; // Decrement the year
  }

  // Create a new date with the calculated month and year
  let newDate = new Date(currentYear, newMonth, date.getDate());

  // Convert the new date to a Unix timestamp
  let newTimestamp = newDate.getTime();

  return newTimestamp;
}
export const roundOff=(param)=>{
  const value=parseInt(param)
  if(value=='NaN'){
    return 0
  }
  return Math.round(value)
}