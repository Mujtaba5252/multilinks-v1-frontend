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

  export const subtractOneMonthFromTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDay = date.getDate();
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();
    const currentMilliseconds = date.getMilliseconds();
  
    const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  
    // Calculate the number of days in the previous month to ensure the date is valid.
    const daysInPreviousMonth = new Date(newYear, newMonth + 1, 0).getDate();
    
    let newDay = currentDay;
  
    // Check if the current day is greater than the number of days in the previous month.
    if (currentDay > daysInPreviousMonth) {
      newDay = daysInPreviousMonth;
    }
  
    const newDate = new Date(newYear, newMonth, newDay, currentHours, currentMinutes, currentSeconds, currentMilliseconds).getTime();
  
    return newDate;
  };
  export const addOneMonthFromTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let currentDay = date.getDate();
  
    // Calculate the new month and year.
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
  
    if (newMonth > 11) {
      newMonth = 0; // January
      newYear += 1; // Increment the year
    }
  
    // Calculate the number of days in the current month to ensure the date is valid.
    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    // Ensure that the new day is valid for the new month.
    let newDay = Math.min(currentDay, daysInCurrentMonth);
  
    // Create a new Date object with the updated values.
    const newDate = new Date(newYear, newMonth, newDay, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  
    return newDate.getTime();
  };
  
export const roundOff=(param)=>{
  const value=parseInt(param)
  if(value=='NaN'){
    return 0
  }
  return Math.round(value)
}