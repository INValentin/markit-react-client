import { useState } from "react"

const useFetch = () => {
    const [loading, setLoading] = useState(false);

    const request = async (url, options = {}) => {
        setLoading(true)
        await fetch(url, options)
        setLoading(false)
    }

    const get = async (url, options = {}) => {
        await request(url, options);
    }

    const post = async (url, options = {}) => {
        await request(url, {
            ...options,
            method: 'POST'
        })
    }

    const put = async (url, options = {}) => {
        await request(url, {
            ...options,
            method: 'PUT'
        })
    }

    const del = async (url, options = {}) => {
        await request(url, {
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
