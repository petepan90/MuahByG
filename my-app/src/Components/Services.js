import React from "react";
import { Component } from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core"

class Services extends Component {
    render() {
        return (<Container maxWidth='xl'
            disableGutters={true}>
            <Grid item xs={12}>

                <Paper
                    style={{ height: "800px", background: "lightgray", color: 'black' }}
                    id="Servicespaper">
                    <Paper elevation={5} />
                    <Paper />
                    <Paper elevation={3} />
                </Paper>
            </Grid>

        </Container>



        );
    }
}

export default Services;

const style = {
    width: '80%',
    height: '70%',
    background: 'lightgreen',

}