import { axios_get } from "../../../Utils/Axios";

export const getPaymentInvoiceData = async ({url,setPaymentInvoiceData,setPagination}) => {
    axios_get({ url: url, withSNo: true })
      .then((res) => {
        console.log(res.data.data);
        setPaymentInvoiceData(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };