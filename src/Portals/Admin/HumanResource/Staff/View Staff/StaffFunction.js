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
    
      // Calculate the first day of the current month.
      const firstDay = new Date(currentYear, currentMonth, 1);
    
      // Get the timestamp of the first day.
      return firstDay.getTime();    
  };
  export const addOneMonthFromTimestamp = (timestamp) => {
      const date = new Date(timestamp);
      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth();
    
      // Calculate the last day of the current month.
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
    
      // Get the timestamp of the last day.
      return lastDay.getTime();
  };
  
export const roundOff=(param)=>{
  const value=parseInt(param)
  if(value=='NaN'){
    return 0
  }
  return Math.round(value)
}