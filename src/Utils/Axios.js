import axios from "axios";
import { Token } from "./UserDetails";
import { backendUrl } from "./Constants";

export const axios_get = async ({ url, header, params, withSNo }) => {
  let response;
  const token = Token();
  try {
    response = await axios.get(backendUrl + url, {
      ...params,
      headers: {
        Authorization: "Bearer " + token,
        ...header,
      },
    });
  } catch (error) {
    response = error.response;
  }
  if (response.data && withSNo) {
    response.data.data = response.data.data?.map((item, index) => {
      return { ...item, sNo: index + 1 };
    });
  }
  return response;
};

export const axios_post = async ({ url, data, header, params }) => {
  let response;
  const token = Token();
  try {
    response = await axios.post(backendUrl + url, data, {
      ...params,
      headers: {
        Authorization: "Bearer " + token,
        ...header,
      },
    });
    return response;
  } catch (error) {
    response = error.response;
  }
  return response;
};

export const axios_put = async ({ url, data, header, params }) => {
  const token = Token();
  let response;
  try {
    response = await axios.put(backendUrl + url, data, {
      ...params,
      headers: {
        Authorization: "Bearer " + token,
        ...header,
      },
    });
    return response;
  } catch (error) {
    response = error.response;
  }
  return response;
};

export const axios_delete = async ({ url, header, params }) => {
  const token = Token();
  const response = await axios.delete(backendUrl + url, {
    ...params,
    headers: {
      Authorization: "Bearer " + token,
      ...header,
    },
  });
  return response;
};

export const axios_patch = async ({ url, data, header, params }) => {
  const token = Token();
  const response = await axios.patch(backendUrl + url, data, {
    ...params,
    headers: {
      Authorization: "Bearer " + token,
      ...header,
    },
  });
  return response;
};

export const axios_switch = async (option, data) => {
  switch (option) {
    case "post":
      return axios_post(data);
    case "put":
      return axios_put(data);
    case "get":
    default:
      axios_get(data);
  }
};
