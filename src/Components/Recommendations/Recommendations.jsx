import React, {Component} from 'react';
import {Container, Paper} from '@material-ui/core'
import './Recommendations.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';


class Recommendations extends Component {

    render() {
        return (
            <div>
                <h1 className="underline">RECOMMENDATIONS</h1>
                <box>
                    <Container>
                            
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={1} className="line-height-1point5em">
                            <Grid item xs={12} >
                                <Paper>
                                    <p>
                                        <FormatQuoteIcon className="icon-flipped"/>
                                        Cindy is a diligent worker with a broad base of experience. She's happy to jump into any new technology and figure out the best way 
                                        to apply it to a problem. She worked remotely for me and I never had any issues with her engagement or output. 
                                        A great person to have on your team, and a great mentor for more junior <span className="white-space-nowrap">developers.
                                        <sub><FormatQuoteIcon /></sub></span>  
                                        <br></br><b>Erik B - Chief Technology Officer</b>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} >
                                <Paper>
                                    <p>
                                        <FormatQuoteIcon className="icon-flipped"/>
                                        Cindy is an incredibly talented developer with an extensive knowledge of server, database and UI design concepts and libraries. 
                                        Her ability to manage complex database structures to filter and deliver usable data to an application’s front end is unmatched. 
                                        Always ready to embrace new technologies, she will dive in and prototype a new application from the ground up, delivering a 
                                        logically architected framework enabling other team members to join in the effort with ease. Whether doing code reviews, wrestling with code, 
                                        or researching solutions, she is always there to assist other colleagues if they have a blocker. 
                                        I thoroughly enjoyed working with Cindy and I hope to have an opportunity to do so <span className="white-space-nowrap">again.
                                        <sub><FormatQuoteIcon /></sub></span>
                                        <br></br><b>Chris L - Senior Software Engineer</b>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} >
                                <Paper>
                                    <p>
                                        <FormatQuoteIcon className="icon-flipped" />
                                        Cindy was instrumental in the development of GigaTrust's cloud strategy. As the industry and technology changed Cindy was quick at adapting and applying what she learned to GigaTrust's products. She's a dedicated engineer with a very positive "can do" <span className="white-space-nowrap">attitude.
                                        <sub><FormatQuoteIcon /></sub></span>
                                        <br></br><b>Tom D - Principal Software Engineer</b>
                                    </p>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </box>
            </div>
        );
    }
}

export { Recommendations }; 