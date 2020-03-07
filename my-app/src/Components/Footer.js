import React from "react";
import { Component } from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core"

class Footer extends Component {
    render() {
        return (<Container maxWidth='xxl' >
            <Grid item xs={12}>

                <Paper style={{ height: "180px" }} id='Footer' >Footer</Paper>
            </Grid>
        </Container>

        );
    }
}

export default Footer;