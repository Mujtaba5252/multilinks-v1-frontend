import { axios_get } from "../../../../Utils/Axios";

export const getLicenseData = async ({url,setLicenseData,setPagination}) => {

    await axios_get({ url: url, withSNo: true })
      .then((res) => {
        console.log(res);
        setLicenseData(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };