import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GET_ITENS } from '../service/api'
// aqui eu deixo toda lógica de feth.
export const storageContext = createContext()
export const StorageContext = ({ children }) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(false)
    const { push } = useHistory()
    const getItens = async (state) => {
        const {
            uri,
            redirect_page,
        } = state
        const { url, options } = GET_ITENS(uri)
        const response = await fetch(url, options)
        const json = await response.json()
        if (response.ok) {
            setMessage(json.msg)
            setError(false)
            push(redirect_page)
        } else {
            setMessage(json.msg)
            setError(false)
        }
    }
    return <storageContext.Provider value={
        { data, setData, error, setError, message, getItens }
    }>
        {children}
    </storageContext.Provider>
}