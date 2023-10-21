import { axios_get } from "../../../../../Utils/Axios";

export const fetchLeaves = async ({url,setLeavesData,setPagination}) => {
    await axios_get({ url: url,withSNo: true }).then((res) => {
      setLeavesData(res.data.data);
      setPagination(res.data.pagination);
    });
  };