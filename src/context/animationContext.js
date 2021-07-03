import React, { createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cadastro_1 from '../assets/cadastro_1.png';
import logo_login from '../assets/logo_login.png';
import info_modal from '../assets/info_modal.png';
// aqui eu crio toda lógida de animação ou estilizações
export const animationContext = createContext();
export const AnimationContext = ({ children }) => {
  const stylesHome = {
    root: {
      padding: "50px 100px",
      zIndex: 999,
      position: "absolute"
    },
    card: {
      display: "flex",
      height: "calc(100vh - 100px)"
    },
    rightBorder: {
      borderRight: "solid #d0D0D0 1px"
    },
    content: {
      marginTop: 0
    },
    background: {
      position: "absolute",
      height: 200,
      width: "100%",
      top: 0,
      background: "#7159C1"
    },
    rightContainer: {
      background:
        "url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
      flex: 1
    },
    heightAdjust: {
      display: "flex",
      flexDirection: "column"
    },
    paper: {
      background: "#9de1fe",
      padding: 20
    },
    information: {
      color: "#444"
    }
  };
  const stylesLogin = makeStyles((theme) => ({
    root: {
      background: '#FFF',
      overflow: 'hidder',
      marging: '0 auto',
    },
    cadastro_1: {
      background: '#FFF',
      paddingTop: 349,
      paddingLeft: 242,
      paddingRight: 140,
      paddingBottom: 281,
      [theme.breakpoints.down("xs")]: {
        display: 'none'
      },
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      },
    },
    cadastro_1_image: { widht: 393, height: 394 },
    illustration: {
      position: 'absolute',
      left: '2.59%',
      right: '2.62%',
      top: '2.45%',
      bottom: '2.82%',
    },
    vector: {
      position: 'absolute',
      left: '4.12%',
      right: '3.46%',
      top: '3.27%',
      bottom: '3.49%',
      background: '#F4F7FA',
    },
    titulo: {
      position: 'absolute',
      width: 106,
      height: 24,
      left: 72,
      top: 72,
      display: 'flex',
      cursor: 'pointer',
      [theme.breakpoints.down('xs')]: {
        paddingTop: 32,
        top: 0,
        left: 32,
      }
    },
    arrowBack: {
      //position: 'absolute',
      width: 24,
      height: 24,
      left: 72,
      // top: 72,
    },
    arrowBackIcon: {
      // position: 'absolute',
      left: '16.67%',
      right: '16.67%',
      // top: '16.67%',
      bottom: '16.67%',
      fill: '#9B51E0',
    },
    retornar: {
      // position: 'absolute',
      width: 76,
      height: 18,
      left: 102,
      // top: 74,
      //fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '1.125rem',
      // lineHeight: 20,
      /* or 111% */
      letterSpacing: 0.25,
      color: '#9B51E0',
    },
    group_49: {
      paddingTop: 210,
      paddingRight: 110,
      paddingLeft: 40,
      paddingBottom: 149,
      background: '#FFF',
      [theme.breakpoints.down('xs')]: {
        padding: 0,
        margin: '0 auto',
        overflow: 'hidden',
      },
      [theme.breakpoints.down("sm")]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
    },
    bg: {
      // position: 'absolute',
      width: 555,
      height: 665,
      background: '#F5F0FD',
      borderRadius: 30,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: '100%',
        // overflow: 'hidden',
      }
    },
    bg_container: {
      paddingTop: 94,
      paddingLeft: 68,
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 26,
      }
    },
    acessar: {
      // position: 'absolute',
      left: '58.54%',
      right: '21.88%',
      bottom: '65.72%',
    },
    acessar_retorno: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      }
    },
    sign_up_to_brainalit: {
      // position: 'absolute',
      left: '58.54%',
      right: '25.49%',
      // top: '29.69%',
      bottom: '68.36%',
      //fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '1.5625rem',
      // lineHeight: 20,
      /* identical to box height, or 80% */
      letterSpacing: -0.06,
      color: '#5914DF',
      marginBottom: 5,
    },
    sign_up_to_brainalit_description: {
      // position: 'absolute',
      left: '58.54%',
      right: '21.88%',
      // top: '32.13%',
      bottom: '65.72%',
      //fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '0.75rem',
      // lineHeight: 24,
      /* or 200% */
      letterSpacing: 0.1,
      color: '#757171',
    },
    logo_login: {
      // position: 'absolute',
      width: 93.65,
      height: 69,
      // left: 1167,
      marginLeft: 42,
      marginRight: 69.35,
      marginBottom: 25,
      background: `url(${logo_login})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      [theme.breakpoints.down('xs')]: {
        width: 58,
        height: 43,
        margin: '0 auto',
        backgroundSize: '58px 43px',
        marginBottom: 27
      },
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flex: 1,
      paddingRight: 66,
      [theme.breakpoints.down('xs')]: {
        paddingRight: 28,
        paddingTop: 23,
      }
    },
    textField: {
      width: '100%',
      marginBottom: 25,
      background: '#FFF',
      left: 0,
      top: '0%',
      bottom: '26.32%',
      borderRadius: '4px 4px 0px 0px',
    },
    textField_label: {
      // position: absolute;
      width: 194.94,
      left: 17,
      bottom: 39,
      //fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      // lineHeight: 19,
      /* identical to box height */
      display: 'flex',
      alignItems: 'center',
      /* Black 87% */
      color: 'rgba(0, 0, 0, 0.87)',
    },
    formHelperText: {
      padding: 1,
    },
    botao_cadastrar: {
      marginTop: 57,
      marginBottom: 25,
    },
    botao_login: {
      marginBottom: 52,
      [theme.breakpoints.down('xs')]: {
        border: 'none',
        marginBottom: 100,
      }
    }
  }));
  const stylesModal = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: 10,
    },
    informacao_1: {
      width: 83,
      height: 84,
      paddingTop: 73,
      margin: '0 auto',
      [theme.breakpoints.down('xs')]: {
        paddingTop: 39,
      }
    },
    illustration: {
      left: '4.59%',
      right: '4.47%',
      bottom: '3.12%',
    },
    modalTitle: {
      //fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      textAlign: 'center',
      letterSpacing: 0.15,
      color: '#000000',
      [theme.breakpoints.down('xs')]: {
        paddingTop: 32.03
      }
    },
    modalDescription: {
      paddingTop: 18,
      //fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      // line - height: 24,
      /* or 171% */
      textAlign: 'center',
      letterSpacing: 0.15,
      color: '#000000',
    },
    botao_fechar_modal: {
      background: '#1071E6',
      borderRadius: 4,
      marginTop: 37,
      marginBottom: 37,
    },
  }));
  return <animationContext.Provider value={
    { stylesHome, stylesLogin, stylesModal, cadastro_1, info_modal }
  }>
    {children}
  </animationContext.Provider>
}