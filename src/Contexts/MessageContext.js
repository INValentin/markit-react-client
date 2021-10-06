import React, { useContext, useState } from 'react'

const MessageContext = React.createContext([])
const MessageUpdateContext = React.createContext()


export const useMsgCtx = () => {
    return useContext(MessageContext)
}

export const useUpdateMsgCtx = () => {
    return useContext(MessageUpdateContext)
}


const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([])

    const appendMsg = (msg) => {
        msg.id = Math.random() * 1000
        setMessages([...messages, msg])
    }
    
    const prependMsg = (msg) => {
        msg.id = Math.random() * 1000
        setMessages([msg, ...messages])
    }

    const removeMsg = (msg) => {
        setMessages(messages.filter(m => m.id !== msg.id))
    }

    const clearAll = () => {
        setMessages([])
    }

    return <MessageContext.Provider value={messages}>
        <MessageUpdateContext.Provider value={{appendMsg, prependMsg, removeMsg, clearAll}}>
            { children }
        </MessageUpdateContext.Provider>
    </MessageContext.Provider>
}

export default MessageProvider
