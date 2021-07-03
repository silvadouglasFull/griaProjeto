/* eslint-disable no-useless-escape */
import React, { createContext, useState, useReducer } from 'react'
export const formContext = createContext()
const initialState = {
    usu_email: '',
    usu_pass: '',
    usu_cpf: '',
    contra_senha: '',
}
const errorInput = {
    usu_email_error: false,
    usu_pass_error: false,
    usu_cpf_error: false,
    contra_senha_error: false,
}
const reducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value
    }
}
export const FormContext = ({ children }) => {
    const [disabledButton, setDisabledButton] = useState(true)
    const [state, dispatch] = useReducer(reducer, initialState)
    const [errors, dispatchError] = useReducer(reducer, errorInput)
    const [helperText, setHelperText] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showControlPassword, setControlShowPassword] = useState(false)
    const [email, setEmail] = useState(false)
    const {
        contra_senha,
        usu_pass,
    } = state
    const onChange = ({ target }) => {
        dispatch({ field: target.name, value: target.value })
        dispatchError({ field: target.id, value: false })
    }
    const verifyInput = ({ target }) => {
        let result = false
        if (target.value === '') result = true
        dispatchError({ field: target.id, value: result })
    }
    // MASCARAS
    const CPF = (value) => {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        if (value.length > 14) {
            return CPF(value);
        } else {
            return value;
        }
    }
    const CNPJ = (value) => {
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/, "$1.$2");
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
        if (value.length > 18) {
            return CNPJ(value.substring(0, 18));
        } else {
            if (value.length < 15) {
                return CPF(value);
            } else {
                return value;
            }
        }
    }
    const handleValue = async (field) => {
        try {

            Object.keys(field).map((key) => {
                return dispatch({ field: key, value: field[key] });
            })
        } catch (error) {
            console.error(error);
        }
    }
    const handleError = async (field) => {
        try {
            Object.keys(field).map((key) => {
                return dispatch({ field: key, value: field[key] });
            })
        } catch (error) {
            console.error(error);
        }
    }
    const IsEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return setEmail(re.test(email));
    }
    const verifyPass = () => {
        if (usu_pass !== contra_senha) dispatchError({ field: 'contra_senha_error', value: true })
        else dispatchError({ field: 'contra_senha_error', value: false })
    }
    const verifyPassLength = () => {
        if (usu_pass.length < 5) {
            dispatchError({ field: 'usu_pass_error', value: true })
            setHelperText("A senha deve ter mais de 5 caracteres")
            return true
        } else {
            dispatchError({ field: 'usu_pass_error', value: false })
            setHelperText(false)
            return false
        }
    }
    return <formContext.Provider value={
        {
            disabledButton, setDisabledButton, state, dispatch, helperText, setHelperText, showPassword,
            setShowPassword, showControlPassword, setControlShowPassword, onChange, errors, dispatchError,
            verifyInput, CNPJ, CPF, handleValue, IsEmail, email, setEmail, verifyPass, handleError, verifyPassLength
        }
    }>
        {children}
    </formContext.Provider>
}