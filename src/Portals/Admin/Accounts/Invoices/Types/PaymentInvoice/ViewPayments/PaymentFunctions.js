import { axios_get } from "../../../../../../../Utils/Axios";

export const fetchPayment = async ({url,setPaymentData,setPagination}) => {
    url = url;
    await axios_get({ url: url,withSNo:true }).then((res) => {
      setPaymentData(res.data.data);
      setPagination(res.data.pagination);
    });
  };