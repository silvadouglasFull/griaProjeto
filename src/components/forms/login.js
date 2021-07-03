/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react'
import { animationContext } from '../../context/animationContext'
import { formContext } from '../../context/formContext'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CheckIcon from '@material-ui/icons/Check';
import { userContext } from '../../context/userContext';
const LoginForm = () => {
    const { stylesLogin } = useContext(animationContext)
    const { state, setHelperText, disabledButton, setDisabledButton, showPassword, setShowPassword,
        showControlPassword, setControlShowPassword, onChange, CNPJ, email,
        IsEmail, errors, verifyInput, verifyPass, helperText, verifyPassLength } = useContext(formContext)
    const { onSubmitLogin, setOpen } = useContext(userContext)
    const classes = stylesLogin();
    const {
        usu_cpf,
        usu_email,
        usu_pass,
        contra_senha,
    } = state
    const {
        usu_email_error,
        usu_pass_error,
        usu_cpf_error,
        contra_senha_error,
    } = errors
    const onSubmit = (event) => {
        event.preventDefault();
        if (!verifyPassLength()) {
            if (usu_pass !== contra_senha) setHelperText("As senhas não são iguais")
            else {
                onSubmitLogin({
                    uri: '/login',
                    method: 'POST',
                    redirect_page: '/home',
                    usu_cpf: usu_cpf,
                    usu_email: usu_email,
                    usu_pass: usu_pass,
                })
            }
        }
    }
    const onBlur = () => {
        if (usu_cpf &&
            usu_email &&
            usu_pass &&
            contra_senha) setDisabledButton(false)
        else setDisabledButton(true)
        verifyPass()
    }
    const handleClickShowPassword = (args) => {
        if (args === 0) setShowPassword(!showPassword)
        else setControlShowPassword(!showControlPassword)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return <form className={classes.form} onSubmit={onSubmit} noValidate>
        <FormControl className={classes.textField} error={usu_cpf_error}>
            <InputLabel htmlFor="usu_cpf_error" className={classes.textField_label}>CPF</InputLabel>
            <Input
                id="usu_cpf_error"
                name="usu_cpf"
                type="text"
                autoComplete="email"
                value={CNPJ(usu_cpf)}
                onChange={onChange}
                onBlur={verifyInput}
                required
                aria-describedby="component-error-text_usu_cpf_error"
                endAdornment={
                    usu_cpf?.length > 13 &&
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle usu_cpf visibility"
                        >
                            <CheckIcon style={{ fill: "green" }} />
                        </IconButton>
                    </InputAdornment>
                }
            />
            {usu_cpf_error &&
                <FormHelperText className={classes.formHelperText} id="component-error-text_usu_cpf_error">
                    Esse campo não pode ficar vazio
                </FormHelperText>
            }
        </FormControl>
        <FormControl className={classes.textField} error={usu_email_error}>
            <InputLabel htmlFor="usu_email_error" className={classes.textField_label}>E-mail</InputLabel>
            <Input
                id="usu_email_error"
                name="usu_email"
                type="email"
                autoComplete="email"
                value={usu_email}
                onChange={onChange}
                aria-describedby="component-error-text_usu_cpf_error"
                required
                onBlur={(event) => {
                    IsEmail(usu_email)
                    verifyInput(event)
                }}
                endAdornment={
                    email &&
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle usu_email visibility"
                        >
                            <CheckIcon style={{ fill: "green" }} />
                        </IconButton>
                    </InputAdornment>
                }
            />
            {usu_email_error &&
                <FormHelperText className={classes.formHelperText} id="component-error-text_usu_cpf_error">
                    Esse campo não pode ficar vazio
                </FormHelperText>
            }
        </FormControl>
        <FormControl className={classes.textField} error={usu_pass_error}>
            <InputLabel htmlFor="usu_pass_error" className={classes.textField_label}>Senha</InputLabel>
            <Input
                autoComplete="new-password"
                id="usu_pass_error"
                type={showPassword ? "text" : "password"}
                name="usu_pass"
                value={usu_pass}
                onChange={onChange}
                onBlur={verifyInput}
                required
                aria-describedby="component-error-text_usu_pass_error"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => handleClickShowPassword(0)}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {usu_pass_error &&
                <FormHelperText className={classes.formHelperText} id="component-error-text_usu_pass_error">
                    {helperText ? helperText : 'Esse campo não pode ficar vazio'}
                </FormHelperText>
            }
        </FormControl>
        <FormControl className={classes.textField} error={contra_senha_error}>
            <InputLabel htmlFor="contra_senha" className={classes.textField_label}>Confirma senha</InputLabel>
            <Input
                autoComplete="new-password"
                id="contra_senha"
                type={showControlPassword ? "text" : "password"}
                name="contra_senha"
                value={contra_senha}
                onChange={onChange}
                required
                onBlur={onBlur}
                aria-describedby="component-error-text_contra_senha"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => handleClickShowPassword(1)}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showControlPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {contra_senha_error &&
                <FormHelperText className={classes.formHelperText} id="component-error-text_contra_senha">
                    As senhas não conferem
                </FormHelperText>
            }
        </FormControl>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={disabledButton}
            className={classes.botao_cadastrar}
        >CADASTRAR</Button>
        <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => setOpen(true)}
            className={classes.botao_login}
        >
            JÁ POSSUI CADASTRO? FAÇA LOGIN AQUI
        </Button>
    </form>
}
export default LoginForm