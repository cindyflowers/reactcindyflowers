import React, { Component } from 'react';
import {Box, Container} from '@material-ui/core'
import 'roboto-npm-webfont';
import './App.css';

import {HeaderSpaceBalls} from './Components/Header/HeaderSpaceBalls'
import {Header} from './Components/Header/Header'
import {About}  from './Components/About/About'
import {Recommendations}  from './Components/Recommendations/Recommendations'
import {Contact}  from './Components/Contact/Contact'
import {Footer}  from './Components/Footer/Footer'


export default class App extends Component {
  render() {
    return (
          <div className="App">
            <HeaderSpaceBalls background="#252934"></HeaderSpaceBalls>
            <Header introduction="Hello, I'm " name="Cindy Flowers." nameColor="hotpink" description="I'm a full-stack ASP.NET Developer."></Header>
            <About></About>
            <Recommendations></Recommendations>
            <Contact></Contact>
            <Footer></Footer>
          </div>

    );
  }
}
