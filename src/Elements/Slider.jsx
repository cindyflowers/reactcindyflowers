import React, {Component} from 'react';
import SkillBar from 'react-skillbars';

class Slider extends Component {
    render() {
        const skills = [
            {type: "ASP.NET", level: 75},
            {type: "c#", level: 80},
            {type: "HTML", level: 65},
            {type: "Javascript", level: 70},
            {type: "React", level: 35},
            {type: "MVC", level: 55},
            {type: "jQuery", level: 65},
            {type: "UI Design", level: 55},
            {type: ".Net Core", level: 50},
            {type: "SQL", level: 70},
          ];
        const myColors = {  
            "bar": "#00A1A7",
            "title": {
                "text": "#fff",
                "background": "#04C2C9"
            }
        }
        return (
            <SkillBar skills={skills} colors={myColors}/>
        );
    }
}

export { Slider }; 