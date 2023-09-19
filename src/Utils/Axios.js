import axios from "axios";
import { Token } from "./UserDetails";
import {backendUrl} from "./Constants";

export const axios_get=async ({url,header,params})=>{
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
    return  response; 
}

export const axios_post=async ({url,header,params})=>{
    let response;
    const token=Token();
    try{
        response=await axios.post(backendUrl+url,{
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
    return  response; 
}

export const axios_put=async ({url,header,params})=>{
    const token=Token();
    const response=await axios.put(backendUrl+url,{
        ...params,
        headers:{
            Authorization:'Bearer '+token,
            ...header
        }
    });
    return  response;
}

export const axios_delete=async ({url,header,params})=>{
    const token=Token();
    const response=await axios.delete(backendUrl+url,{
        ...params,
        headers:{
            Authorization:'Bearer '+token,
            ...header
        }
    });
    return  response;
}

export const axios_patch=async ({url,header,params})=>{
    const token=Token();
    const response=await axios.patch(backendUrl+url,{
        ...params,
        headers:{
            Authorization:'Bearer '+token,
            ...header
        }
    });
    return  response;
}