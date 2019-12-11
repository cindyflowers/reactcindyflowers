import React, {Component} from 'react';
import {Container} from '@material-ui/core'
import './Contact.css';
import { styled } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #04C2C9 30%, #00A1A7 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 161, 167, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  });
class Contact extends Component {

    render() {

        return (
                <div className="contact">
                    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
                        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
                    </svg>
                    <h1 className="underline">CONTACT</h1>
                    <box>
                        <Container maxWidth="lg">
                        <div style={{ float:"left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                            </div>
                            <form id="contact-form" action="https://formspree.io/mnqnzzgv" method="POST">

                                <Grid container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={1} >

                                    <Grid item xs={12} >
                                        <TextField label="Name (required)" name="name" variant="filled" required className="contact-form"/>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField label="Enter email (required)" type="email" variant="filled" name="_replyto" required className="contact-form"/>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField label="Your Message"  multiline rows="4" variant="filled" name="message" className="contact-form"/>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <MyButton  variant="outlined" color="default" type="submit" id="submit" className="contact-form" >SUBMIT</MyButton>
                                    </Grid>

                                </Grid>
                            </form>
                    </Container>
                </box>
            </div>
        );
    }
}

export { Contact }; 