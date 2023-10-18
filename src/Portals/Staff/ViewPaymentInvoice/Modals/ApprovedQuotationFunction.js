import { axios_get } from "../../../../Utils/Axios";

export const fetchApprovedQuotation = async ({url,setApprovedQuotation,setPagination}) => {
    await axios_get({ url: url,withSNo:true }).then((res)=>{
            setApprovedQuotation(res.data.data)
            setPagination(res.data.pagination)
        }
    )
    .catch((err) => {
        console.log(err);
    }
    )
}