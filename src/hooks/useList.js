import React, { useState, useEffect, useRef } from 'react'
import useFetch from './useFetch'

const useList = () => {
    const [data, setData] = useState({})
    const { loading: nextLoading, get } = useFetch()
    const [items, setItems] = useState([])
    const [loaded, setLoaded] = useState(false)
    const loadedRef = useRef(false)

    const loadItems = async (callback) => {
        const res = await callback()
        const data = await res.json()
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
        setData({ ...data, data: [item, ...items] })
    }

    const changeItem = (item, newItem) => {
        const newData = [...(data.data || [])]
        const oldIndex = newData.findIndex(it => it.id === item.id)
        newData.splice(oldIndex, 1, newItem)
        setItems(its => its.filter(it => it.id !== item.id))
        setData({ ...data, data: newData })
    }

    const removeItem = (item) => {
        const newData = [...data.data || []].filter(it => it.id !== item.id)
        setItems(its => its.filter(it => it.id !== item.id))
        setData({ ...data, data: newData })
    }

    const loadHandler = (url) => {
        setLoaded(false)
        loadItems(() => Promise.resolve(get(url)))
    }
    const MoreBtn = () => {
        return <div>
            {nextLoading && <span className="loader"></span>}
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
            setItems(items => [...(items.filter(it => !data.data.some(ite => ite.id === it.id))), ...data.data])
        }
    }, [data])


    return {
        loaded, data, setItems, items, loadItems, prependItem, appendItem, changeItem, removeItem, MoreBtn, setData
    }
}

export default useList
