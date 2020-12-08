import { Typography } from "@material-ui/core";
import * as React from "react"
import './main.css';

const About = () => {
    return (
        <div className="project-div">
            <Typography variant='h4' className="project-subtitle"><b>About Me</b></Typography>
            <div className="about-container">
                <div className="about-section" style={{backgroundColor: '#b19cd9'}}>
                <Typography className="text">
                        Hello! This will be a picture of me in a non-anonymous version!
                    </Typography>
                </div>
                <div className="about-section" >
                    <Typography className="text">
                        Hello! I'm Phil, and my pronouns are she/her. I'm a computer science student interested in the applications of AI/Machine Learning and Data Science.
                        I am based in the Bay Area, where I was born, raised, and now call home. Currently, I am in my final year at Brown University, where 
                        I am working towards an Sc. B degree in Computer Science.
                    </Typography>

                    <Typography className="text">
                        I am always looking expand my breadth of knowledge, which is why I am currently learning at UI/UX design and web development. This portfolio 
                        showcases a few of my first works in UI/UX design :) Thanks for stopping by and taking a look!
                    </Typography>

                    <Typography className="text">
                        Outside of school, I enjoy playing tennis, taking walks, and taking pretty pictures of sunsets. I am also a sushi enthusiast and love all things
                        seafood! 
                    </Typography>

                    <Typography className="text">
                        After graduation, I will be working as a software engineer at Capital One, where I previously interned. 
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default About;