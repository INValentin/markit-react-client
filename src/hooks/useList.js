import React, { useState, useEffect, useRef } from 'react'

const useList = () => {
    const [data, setData] = useState({})
    const [items, setItems] = useState([])
    const [loaded, setLoaded] = useState(false)
    const loadedRef = useRef(false)

    const loadItems = async (callback) => {
        const res = await callback()
        const data = await res.json()

        if (!res.ok) {
            throw new Error(data)
        }

        setData(data)
        setLoaded(true)
        loadedRef.current = true
    }

    const addItem = (item) => {
        const currentData = data.data || []
        setData({ ...data, data: [...currentData, item] })
    }

    const removeItem = (item) => {
        const currentData = data.data || []
        setData({ ...data, data: currentData.filter(it => it.id !== item.id) })
    }

    const MoreBtn = () => {
        return <button className="btn btnSm moreBtn" style={{ margin: ".25rem .05rem" }}>More</button>
    }

    useEffect(() => {
        if (data.data) {
            setItems([...data.data])
        }
    }, [data])

    return {
        loaded, data, items, loadItems, addItem, removeItem, MoreBtn, setData
    }
}

export default useList
