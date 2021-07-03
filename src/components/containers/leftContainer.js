/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import {
    Paper,
    Typography,
    Grid,
    CardHeader,
    Avatar,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import { storageContext } from '../../context/storageContext';

const LeftContainer = ({ classes }) => {
    const { data, setData } = useContext(storageContext)
    // const { data, getItens, setData } = useContext(storageContext)
    useEffect(() => {
        // se realmente existisse uma api para ser consumida chamaria essa função
        // getItens()
        setData([
            { id: 1, name: "Diego", text: "Lorem ipsum", image: <ImageIcon /> },
            { id: 2, name: "Robson", text: "Lorem ipsum", image: <WorkIcon /> },
            { id: 3, name: "Cleiton", text: "Lorem ipsum", image: <BeachAccessIcon /> }
        ])
        console.log(JSON.stringify(classes.rightContainer))
    }, []);
    return <Grid item xs={3}>
        <CardHeader
            style={classes.rightBorder}
            avatar={
                <Avatar aria-label="Recipe" style={classes.avatar}>
                    H
                </Avatar>
            }
        />
        <Paper style={classes.paper} elevation={0}>
            <Typography style={classes.information} variant="subheader">
                Acesse nossa comunidade no Discord e fique por dentro das novidades!
            </Typography>
        </Paper>
        <List>
            {Array.isArray(data) &&
                data.map(item => (
                    <ListItem>
                        <Avatar>{item.image}</Avatar>
                        <ListItemText primary={item.name} secondary={item.text} />
                    </ListItem>
                ))}
        </List>
    </Grid>
}
export default LeftContainer;