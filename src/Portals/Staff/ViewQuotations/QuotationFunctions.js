import { axios_get } from "../../../Utils/Axios";

export const getQuotationData = async ({ url, setQuotationData, setPagination }) => {
    await axios_get({ url: url, withSNo: true }).then((res) => {
        setQuotationData(res.data.data);
        setPagination(res.data.pagination);
    });
};