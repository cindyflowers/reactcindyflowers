
import React from 'react';
import { SpaceBalls } from '../Elements/SpaceBalls';

class SpaceBallBackground extends React.Component {

    constructor( props ) {
        super( props );
    
        this.state = {
          variance: 0.2,
          pauseAnimation: false
        }
      }
      
      updateDimensions() {
        const height = window.innerWidth >= 200 ? window.innerHeight : 400
        this.setState({ height: height })
      }
    
      componentWillMount() {
        this.updateDimensions()
      }
    
      componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this))
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this))
      }
    //   handleClick(event) {
    //     this.setState({pauseAnimation: !this.state.pauseAnimation});
    //   }

    render() {
      const {background} = this.props;
        return (
            <span className="canvas">
                <div>
                    <SpaceBalls 
                        name="pts_anim"   
                        background={background}
                        pause={this.state.pauseAnimation} style={{height: this.state.height}}/>
                </div> 
                
            </span>
        );
    }
}
export { SpaceBallBackground }; 