import { axios_get } from "../../../Utils/Axios";

export const getCleintData = async ({url,setClientData,setPagination}) => {
    await axios_get({ url: url, withSNo: true })
      .then((res) => {
        setClientData(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };