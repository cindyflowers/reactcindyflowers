import React, {Component} from 'react';
import {Container} from '@material-ui/core'
import './Footer.css';
import { styled } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FloatingActionButton from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
const scrollTo = require('scroll-to');


const MyLinkedInButton = styled(IconButton)({
    color: '#0077B5',
  });
const MyGitHubButton = styled(IconButton)({
    color: '#f5f5f5',
  });
class Footer extends Component {

    onScrollToTop() {
        scrollTo(0, 0, {
          ease: 'out-bounce',
          duration: 2000
        });
      }
    render() {

        return (
                <div className="footer">
                        <Container  >
                            
                            <div className="footer-scroll-down-btn">
                                <Tooltip title="Back to Top" aria-label="Back to Top">
                                    <FloatingActionButton onClick={this.onScrollToTop.bind(this)}>
                                        <HomeIcon />
                                    </FloatingActionButton>
                                </Tooltip>
                            </div>
                            <div class="info-box">
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
                                <div class="footnote">
                                    CINDY FLOWERS <span class="highlight">&copy;2019</span>
                                </div>
                            </div>
                    </Container>
            </div>
        );
    }
}

export { Footer }; 