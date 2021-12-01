import { useState } from "react";
import useToken from "./useToken";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const { hasToken, getToken } = useToken();

  const request = async (url, options = {}) => {
    url = url.endsWith("/") ? url.slice(0,-1) : url;
    setLoading(true);
    const authHeader = hasToken()
      ? { Authorization: `Bearer ${getToken()}` }
      : {};
    options.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...authHeader,
      ...(options.headers || {}),
    };
    return fetch(url, { ...options })
      .then(async (res) => {
        setLoading(false);
        if (!res?.ok) {
          console.warn(res);
        }
        return Promise.resolve(res ? res : {});
      })
      .catch((err) => {
        setLoading(false);
        // console.error(err)
        alert("Connection failed!");
        // window.location.href = "/";
        return Promise.reject("Connection failed!");
      });
  };

  const get = async (url, options = {}) => {
    return await request(url, options);
  };

  const post = async (url, options = {}) => {
    return await request(url, {
      ...options,
      method: "POST",
    });
  };

  const put = async (url, options = {}) => {
    return await request(url, {
      ...options,
      method: "PUT",
    });
  };

  const del = async (url, options = {}) => {
    return await request(url, {
      ...options,
      method: "DELETE",
    });
  };

  return {
    loading,
    get,
    post,
    put,
    del,
  };
};

export default useFetch;
