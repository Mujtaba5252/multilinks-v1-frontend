import toast from "react-hot-toast"
import { axios_get } from "../../../../Utils/Axios"

export const fetchCommissions = async ({url,setCommissionData,setPagination}) => {
    await axios_get({ url: url,withSNo:true }).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setCommissionData(res.data.data)
        setPagination(res.data.pagination)
      }
      else if (res.status === 401) {
        toast.error(res.data.message)
      }
      else {
        toast.error(res.data.message)
      }
    })
      .catch((err) => {
        toast.error(err.message)
      })
  }