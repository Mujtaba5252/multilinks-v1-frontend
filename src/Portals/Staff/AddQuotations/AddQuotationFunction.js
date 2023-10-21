import { axios_get } from "../../../Utils/Axios";

export const getCleintData = async ({url,setClientData,setPagination}) => {
    axios_get({ url: url, withSNo: true })
      .then((res) => {
        console.log(res.data.data);
        setClientData(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };