import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrowBack from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography';
import { useContext } from 'react';
import { animationContext } from '../context/animationContext'
import LoginForm from '../components/forms/login';
import ModalLogin from '../components/modals/modalLogin';
const Login = () => {
    const { stylesLogin, cadastro_1 } = useContext(animationContext)
    const classes = stylesLogin();
    const handleLink = () => {
        window.location.href = "https://www.gria.io/"
    }
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={false} sm={false} md={6}>
                    <Paper className={classes.cadastro_1}>
                        <Grid className={classes.titulo} onClick={handleLink}>
                            <ArrowBack className={classes.arrowBackIcon} />
                            <span className={classes.retornar}>
                                Retornar
                            </span>
                        </Grid>
                        <img src={cadastro_1} className={classes.cadastro_1_image} alt="cadastro_1" />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.group_49}>
                        <Grid className={classes.bg}>
                            <Grid className={`${classes.titulo} ${classes.acessar_retorno}`} onClick={handleLink}>
                                <ArrowBack className={classes.arrowBackIcon} />
                                <span className={classes.retornar}>
                                    Retornar
                                </span>
                            </Grid>
                            <Grid className={classes.bg_container}>
                                <Grid container>
                                    <Grid className={classes.acessar} >
                                        <Typography variant="h5" className={classes.sign_up_to_brainalit}>
                                            Cadastrar Candidato
                                        </Typography>
                                        <Typography variant="body1" className={classes.sign_up_to_brainalit_description}>
                                            Cadastre-se e encontre a oportunidade que deseja
                                        </Typography>
                                    </Grid>
                                    <Grid className={classes.logo_login} />
                                </Grid>
                                <LoginForm />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <ModalLogin />
            </Grid>
        </div>
    );
}
export default Login