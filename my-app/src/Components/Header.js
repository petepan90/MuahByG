import React from "react";
import { Component } from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core"

class Header extends Component {
    render() {
        return (<Container maxWidth='xl' disableGutters={true}>
            <Grid item xs={12}>

                <Paper style={{ height: "250px" }} id="paper">Header</Paper>
            </Grid>
        </Container>

        );
    }
}

export default Header;