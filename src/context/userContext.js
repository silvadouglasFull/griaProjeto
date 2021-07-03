import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { POST_ITENS } from '../service/api'
export const userContext = createContext()
export const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [access, setAccess] = useState(false)
    const [message, setMessage] = useState(false)
    const [open, setOpen] = useState(false);
    const { push } = useHistory()
    const onSubmitLogin = async (state) => {
        const {
            uri,
            method,
            redirect_page,
        } = state
        /* 
        `O link de confirmação foi enviado para o e-mail 
                *******${state.usu_email.slice(state.usu_email.indexOf('@'), state.usu_email.length)}`
        */
        // como é um teste eu mudo o valor da const message
        setMessage({
            title: "Cadastro realizado com sucesso",
            description: "O link de confirmação foi enviado para o e-mail *******ail@email.com"
        })
        setOpen(true)
        const { url, options } = POST_ITENS(state, uri, method)
        const response = await fetch(url, options)
        const json = await response.json()
        if (response.ok) {
            setUser(json)
            if (redirect_page) push(redirect_page)
        } else {
            // setAccess(false)
            // setMessage(json.msg)
        }
        // setOpen(true)
    }
    const Logout = () => {
        setUser(null)
        setAccess(false)
        push('/')
    }
    return (
        <userContext.Provider
            value={{
                user, onSubmitLogin, Logout, setUser, access, message, setMessage, open, setOpen,
            }}>
            {children}
        </userContext.Provider>
    )
}