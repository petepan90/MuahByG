import React from "react";
import { Component } from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core"
import Window from './GallleryWindow';
import Gallerygrid from './Gallerygrid'
import axios from 'axios'
// import images from './images.json'



class Gallery extends Component {
    state = {
        data: [],
        activeIndex: 0

    }
    componentDidMount() {
        axios.get('http://localhost:3000/images').then(res => {
            this.setState({ data: res.data })
        })
    }

    handleClick = (e) => {
        const newactiveindex = e.target.getAttribute('data-index');
        this.setState({
            activeIndex: newactiveindex
        })
    }

    renderTextContent = () => {
        const { data, activeIndex } = this.state
        if (data.length) {
            return (
                <>
                    <h1>{data[activeIndex].title}</h1>

                    <p>{data[activeIndex].bodyText}</p>

                    <p>{}</p>
                </>
            )
        }
    }

    renderData = () => {
        const { data, activeIndex } = this.state

        if (data.length) {
            return (
                <>
                    <Window
                        activeData={data[activeIndex]}

                    />

                    <Gallerygrid
                        data={data}
                        handleClick={this.handleClick}
                    />

                </>
            )
        }

        console.log(data)
        return null
    }
    render() {
        const { data } = this.state
        return (
            <Container maxWidth='xl'
                disableGutters={true}
                id="Bodycontainer">
                <Grid item xs={12}>

                    <Paper
                        style={{ height: "800px" }}
                        id="Gallerypaper">Gallery
                    <div
                            style={GallerStyles}>



                            {/* left side of the container */}
                            <div style={{ flex: 1 }}>
                                {this.renderData()}

                                {/* this code is to pass the selected image to the window component
                                // <Window image={this.state.selected.image}
                            */}

                            </div>

                            {/* right side of the container */}
                            <div style={{ flex: 1, padding: '40px' }}>
                                {this.renderTextContent()}
                                {/* This code will render the selected image's body text
                                {this.state.selected.bodyText}
                            */}
                            </div>
                        </div>
                    </Paper>
                </Grid>

            </Container>





        );
    }
}

const GallerStyles = {
    background: 'light grey',
    height: '680px',
    width: '1200px',
    margin: '40px auto',
    display: 'flex',
    color: 'black',

}

export default Gallery;