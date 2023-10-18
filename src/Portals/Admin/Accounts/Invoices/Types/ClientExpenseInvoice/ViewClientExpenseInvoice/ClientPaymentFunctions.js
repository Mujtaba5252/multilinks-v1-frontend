import { axios_get } from "../../../../../../../Utils/Axios";

export const fetchClientExpense = async ({ url, setClientExpenseData, setPagination }) => {
    await axios_get({ url: url }).then((res) => {
        setClientExpenseData(res.data.data);
        setPagination(res.data.pagination);
    });
};