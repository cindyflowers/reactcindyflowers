import React, {Component} from 'react';
import {Container, Paper} from '@material-ui/core'
import './About.css';
import { styled } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from "@material-ui/core/Grid"
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button"
import {Slider} from "../../Elements/Slider"
const scrollTo = require('scroll-to');

const MyLinkedInButton = styled(IconButton)({
    color: '#0077B5',
  });
const MyGitHubButton = styled(IconButton)({
    color: '#333',
  });
class About extends Component {

    render() {
        return (
                <div>
                    <h1 className="underline">ABOUT</h1>
                    <box>
                        <Container maxWidth="lg">
                            
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="flex-start"
                            spacing={8}>
                            <Grid item xs={12} sm={6} lg={6} xl={6}>
                                
                                    <img src={require('../../Assets/Images/me.JPG')} className="about-me" alt="Cindy Flowers"/>
                                    <Paper>
                                    <h2>About Me</h2>
                                    Senior Full-Stack ASP.NET Software Developer with management experience. Team player offering 30+ years of experience in software development.
                                    <br/><br/>
                                    Passion for continuous learning, developing and delivering quality solutions based on solid design principles and practices. 
                                    <br/><br/>
                                    <Tooltip title="Find me on LinkedIn" aria-label="LinkedIn">
                                        <MyLinkedInButton aria-label="LinkedIn page for Cindy Flowers" color="primary" href="https://www.linkedin.com/in/cindyflowersva/" target="_blank">
                                            <LinkedInIcon />
                                        </MyLinkedInButton>
                                    </Tooltip>
                                    <Tooltip title="Find me on GitHub" aria-label="GitHub">
                                        <MyGitHubButton aria-label="GitHub page for Cindy Flowers" color="primary" href="https://github.com/cindyflowers" target="_blank">
                                            <GitHubIcon />
                                        </MyGitHubButton>
                                    </Tooltip>
                                    {/* <Button color="primary" onClick={this.onScrollToBottom.bind(this)}>Send me a message</Button> */}
                                    <br/>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6} xl={6}>
                                    <Slider></Slider>
                            </Grid>
                        </Grid>
                    </Container>
                </box>
            </div>
        );
    }
}

export { About }; 