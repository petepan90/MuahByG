import React from "react";
import { Component } from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core"

class Body2 extends Component {
    render() {
        return (<Container maxWidth='lg' id="color">
            <Grid item xs={12} id="back">

                <Paper style={{ height: "400px" }} id="paper" id="body">Body</Paper>
            </Grid>

        </Container>



        );
    }
}

export default Body2;