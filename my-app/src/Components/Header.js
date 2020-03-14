import React from "react";
import { Component } from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core"

class Header extends Component {
    render() {
        return (<Container maxWidth='xl'
            disableGutters={true}>
            {/* <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a class="active" href="#home">Portfolio</a></li>
                <li><a href="#news">Booking</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul> */}

            <Grid item xs={12}>


                <Paper
                    color="secondary"
                    style={{ height: "850px", width: '100%' }}
                    id="Headerpaper">
                    <Grid>
                        <img style={{ marginTop: '-660px', paddingTop: '74px' }} src="./images/logomuah.JPG"></img>
                        <Paper id='Headerpaper2'>

                        </Paper>
                    </Grid> </Paper>
            </Grid>

        </Container>

        );
    }
}

export default Header;