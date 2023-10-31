import { axios_get } from "../../../Utils/Axios";

export const getLeaveRequests = async({url,setPagination,setLeaveData}) => {
    await axios_get({ url:url , withSNo: true })
      .then((res) => {
        setLeaveData(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };