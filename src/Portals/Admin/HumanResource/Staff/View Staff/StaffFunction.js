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