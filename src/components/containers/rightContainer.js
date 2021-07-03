import React from 'react';
import {
    Grid,
    CardHeader,
    Avatar,
    IconButton,
    CardContent,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
const RightContainer = ({ classes }) => {
    return <Grid className={classes.heightAdjust} item xs={9}>
        <CardHeader
            avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                    <ImageIcon />
                </Avatar>
            }
            action={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
            title="Diego"
        />
        <CardContent className={[classes.rightContainer, classes.content]} />
    </Grid>
};
export default RightContainer;