import toast from "react-hot-toast";
import { axios_get } from "../../../../../../../Utils/Axios";

export const fetchOfficeExpense = async ({url,setOfficeExpenseData,setPagination}) => {
    await axios_get({ url: url }).then((res) => {
      if (res.status === 200) {
        setOfficeExpenseData(res.data.data)
        setPagination(res.data.pagination)
      }
      else {
        toast.error(res.data.message)
      }
    })
  };