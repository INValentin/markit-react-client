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

    const appendItem = (item) => {
        const currentData = data.data || []
        setData({ ...data, data: [...currentData, item] })
    }

    const prependItem = (item) => {
        const currentData = data.data || []
        setData({ ...data, data: [item, ...currentData] })
    }

    const removeItem = (item) => {
        const currentData = data.data || []
        setData({ ...data, data: currentData.filter(it => it.id !== item.id) })
    }

    const MoreBtn = (callback = null) => {
        return <div className="selectBtnWrapper">
            {data.prev_page_url &&
                <button
                    onClick={() => typeof callback === 'function' && callback(data.prev_page_url)}
                    className="btn btnSm moreBtn"
                    style={{ margin: ".25rem .05rem" }}>
                    {"<<<Prev"}
                </button>
            }
            {data.next_page_url &&
                <button onClick={() => typeof callback === 'function' && callback(data.next_page_url)}
                    className="btn btnSm moreBtn"
                    style={{ margin: ".25rem .05rem" }}>
                    {"Next>>"}
                </button>
            }
        </div>
    }

    useEffect(() => {
        if (data.data) {
            setItems([...data.data])
        }
    }, [data])

    return {
        loaded, data, items, loadItems, prependItem, appendItem, removeItem, MoreBtn, setData
    }
}

export default useList
