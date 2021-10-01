import { useState } from "react"

const useFetch = () => {
    const [loading, setLoading] = useState(false);

    const request = async (url, options = { }) => {
        setLoading(true)
        options.headers = { ...(options.headers||{}), 'Accept': 'application/json', 'Content-Type': 'application/json' }
        return fetch(url, {...options})
        .then(res =>  {
            setLoading(false)
            return Promise.resolve(res);
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
