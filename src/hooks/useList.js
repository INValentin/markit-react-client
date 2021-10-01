import { useState } from 'react'

const useList = () => {
    const [list, setList] = useState([])

    const listAdd = (item) => {
        setList([...list, item])
    }

    const listRemove = (item) => {
        setList(list.filter(it => it.id !== item.id))
    }

    const listUpdate = (item, data) => {
        const newList = [...list]
        let listItem = newList.find(it => it.id === item.id)
        listItem = { ...item, data }
        setList(newList)
    }


    return {
        list,
        listAdd,
        listRemove,
        listUpdate
    }
}

export default useList
