import React, { useState, useEffect, useRef } from 'react'
import useFetch from './useFetch'

const useList = () => {
    const [data, setData] = useState({})
    const { loading:nextLoading, get } = useFetch()
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
        const currentData = (data.data || [])
        setData({ ...data, data: [...currentData, item] })
    }

    const prependItem = (item) => {
        if (!item?.id) return
        console.log(item)
        setData({ ...data, data: [item, ...items] })
    }

    const removeItem = (item) => {
        const currentData = data.data || []
        setData({ ...data, data: currentData.filter(it => it.id !== item.id) })
    }

    const loadHandler = (url) => {
        setLoaded(false)
        loadItems(() => Promise.resolve(get(url)))
    }
    const MoreBtn = () => {
        return <div>
            { nextLoading && <span className="loader"></span> }
            {!nextLoading && data.next_page_url &&
                <button onClick={() => loadHandler(data.next_page_url)}
                    className="btn btnSm moreBtn"
                    style={{ margin: ".25rem .05rem" }}>
                    {"Load More"}
                </button>
            }
        </div>
    }

    useEffect(() => {
        if (typeof data.data === 'object') {
            setItems([...data.data])
        }
    }, [data])

    return {
        loaded, data, items, loadItems, prependItem, appendItem, removeItem, MoreBtn, setData
    }
}

export default useList
