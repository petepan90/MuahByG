import React from 'react';
import { Component } from 'react'
import Container from '@material-ui/core/Container'
import { Grid, Paper } from '@material-ui/core'

class Contact extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        subject: ''
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    };

    render() {
        return (
            <Container id='contactcontain' maxWidth='xl'
                disableGutters={true}>
                <Grid item xs={12}>

                    <Paper style={{ height: "850px", width: '100%', background: 'lightgrey' }}>

                        <h1 id='contacth1'>Contact me for more info !</h1>
                        <form id='formcontainer'>

                            <label style={{ fontSize: '31px' }} for="fname">First Name</label>
                            <br></br>
                            <input
                                style={style}
                                name='firstname'
                                placeholder='Firstname'
                                value={this.state.firstname}
                                onChange={e => this.change(e)} />
                            <br></br>

                            <label style={{ fontSize: '31px' }} for="fname">Last Name</label>
                            <br></br>
                            <input
                                style={style}
                                name="lastname"
                                placeholder='Lastname'
                                value={this.state.lastname}
                                onChange={e => this.change(e)}
                            />
                            <br></br>
                            <label style={{ fontSize: '31px' }} for="fname">User name</label>
                            <br></br>
                            <input
                                style={style}
                                name='email'
                                placeholder='Email'
                                value={this.state.username}
                                onChange={e => this.change(e)}
                            />
                            <br></br>

                            <label style={{ fontSize: '31px' }} for="fname">Subject</label>
                            <br></br>
                            <input
                                style={{ width: '70%', height: '165px' }}
                                name="subject"
                                placeholder='subject'
                                value={this.state.subject}
                                onChange={e => this.change(e)}
                            />
                            <br></br>
                            <button onClick={e => this.onSubmit(e)}>Submit</button>


                        </form>
                    </Paper>


                </Grid>


            </Container>

        )
    }
}


const style = {
    height: "55px",
    width: "70%"
}

export default Contact;