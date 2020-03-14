import React from "react";
import { Component } from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core"

class Footer extends Component {
    render() {
        return (<Container maxWidth='xxl'
            disableGutters={true}
            id='Footercontainer'>
            <Grid item xs={12}>

                <Paper
                    style={{ height: "300px", }}
                    id='Footerpaper' >

                </Paper>
            </Grid>

        </Container>

        );
    }
}

export default Footer;