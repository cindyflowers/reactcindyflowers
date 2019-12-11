import React from 'react';
import './Header.css';
import FloatingActionButton from '@material-ui/core/Fab';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const scrollTo = require('scroll-to');



class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        const {name, introduction, description, nameColor} = this.props;
        return (
            <div className="header">
              <h2>{introduction}<span style={{color: nameColor}}>{name}</span><br></br><span className="description">{description}</span></h2>
              <div className="scroll-down-btn">
                    <FloatingActionButton onClick={this.onScrollToIntro.bind(this)}>
                        <KeyboardArrowDownIcon />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}
export { Header }; 