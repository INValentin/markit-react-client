import { useState } from "react"

const useFetch = () => {
    const [loading, setLoading] = useState(false);

    const request = async (url, options = {}) => {
        setLoading(true)
        options.headers = {  'Accept': 'application/json', 'Content-Type': 'application/json', ...(options.headers||{}) }
        return fetch(url, {...options})
        .then(async res =>  {
            setLoading(false)
            if (!res.ok){
                console.warn(res)
            }
            return Promise.resolve(res);
        })
        .catch(err => {
            setLoading(false)
            // console.error(err)
            throw new Error('(Connection Failed) ' + err);
        })
    }

    const get = async (url, options = {}) => {
        return await request(url, options);
    }

    const post = async (url, options = {}) => {
        return await request(url, {
            ...options,
            method: 'POST'
        })
    }

    const put = async (url, options = {}) => {
        return await request(url, {
            ...options,
            method: 'PUT'
        })
    }

    const del = async (url, options = {}) => {
        return await request(url, {
            ...options,
            method: 'DELETE'
        })
    }

    return {
        loading,
        get,
        post,
        put,
        del
    }
}

export default useFetch
