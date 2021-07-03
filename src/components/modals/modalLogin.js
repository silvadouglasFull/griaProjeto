import React, { useContext } from 'react'
import { userContext } from '../../context/userContext'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { animationContext } from '../../context/animationContext';
import { formContext } from '../../context/formContext';
const ModalLogin = () => {
    const { open, setOpen, message, setMessage } = useContext(userContext)
    const { stylesModal, info_modal } = useContext(animationContext)
    const { handleValue, handleError, setDisabledButton, setEmail } = useContext(formContext)
    const {
        title,
        description
    } = message
    const classes = stylesModal();
    const handleModal = () => {
        setOpen(!open);
        if (open) {
            setMessage({
                title: "",
                description: ""
            })
        }
        handleValue({
            usu_cpf: '',
            usu_email: '',
            usu_pass: '',
            contra_senha: '',
        })
        handleError({
            usu_email_error: false,
            usu_pass_error: false,
            usu_cpf_error: false,
            contra_senha_error: false,
        })
        setDisabledButton(true)
        setEmail(false)
        setOpen(false)
    };
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <div className={classes.informacao_1}>
                        <img src={info_modal} className={classes.illustration} alt="info_modal" />
                    </div>
                    <h2 id="transition-modal-title" className={classes.modalTitle}>{title && title}
                        Cadastro Realizado com Sucesso!
                    </h2>
                    <p id="transition-modal-description" className={classes.modalDescription}>
                        {description && description}
                    </p>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleModal}
                        className={classes.botao_fechar_modal}
                    >
                        FECHAR
                    </Button>
                </div>
            </Fade>
        </Modal>
    );
}
export default ModalLogin