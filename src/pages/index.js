import React, { useContext } from "react";
import {
    Grid,
    Card
} from "@material-ui/core";
import { animationContext } from "../context/animationContext";
import LeftContainer from "../components/containers/leftContainer";
import RightContainer from "../components/containers/rightContainer";
const HomePage = () => {
    const { stylesHome } = useContext(animationContext)
    return <div>
        <div style={stylesHome.background} />
        <Grid container style={stylesHome.root}>
            <Grid item xs={12}>
                <Card style={stylesHome.card}>
                    <Grid container>
                        <LeftContainer classes={stylesHome} />
                        <RightContainer classes={stylesHome} />
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    </div>
};
export default HomePage;