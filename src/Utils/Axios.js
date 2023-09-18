import axios from "axios";
import { Token } from "./UserDetails";
import {backendUrl} from "./Constants";

const axios_get=async ({url,header,params})=>{
    let response;
    const token=Token();
    try{
        response=await axios.get(backendUrl+url,{
            ...params,
            headers:{
                Authorization:'Bearer '+token,
                ...header
            }
        });
    }
    catch(error){
        response=e.response;
    }
}