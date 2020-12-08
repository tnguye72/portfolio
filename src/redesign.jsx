import { Typography, Box, Button } from "@material-ui/core";
import * as React from "react"
import './main.css';
import before from './redesign-original.png';
import after from './redesign.png';
import { Link } from "react-router-dom";

const Redesign = () => {
    return (
        <div className="project-div">
            <Typography variant='h3' className="project-title">Responsive Redesign</Typography>
            <Typography variant='h4' className="project-subtitle">Introduction / Context</Typography>
            <Typography className="text"> 
                    This was a project for CS1300: User Interface and Experience at Brown University, in which I redesigned 
                an existing webpage based on usability standards. I analyzed and identified flaws in an existing interface, 
                created low-fidelity and high-fidelity prototypes for various screen sizes, and built a responsive website based 
                on those prototypes.
        
                I chose to redesign the home page of a local Rhode Island soap business: <a href="http://seafoamtradingco.com/" style={{ textDecoration: 'none' }}><Button size="small" color="primary">Newport Sea Foam Trading Co.
                </Button></a>
            </Typography>
                
            <Typography variant='h4' className="project-subtitle">Identifying Problems</Typography>
            <Typography className="text">
               I analyzed the usability of the website the following criteria: usability, learnability, and memorability. The main problems I found were the disorganization of the nav bar,
               lack of design hierarchy, and accessibility issues involving uninformative alt tags. 
                   </Typography> 
            <Typography variant='h4' className="project-subtitle">Redesign Process</Typography> 
            <Typography className="text">
            My new design focused on organizing the nav bar into categories, adding some interaction (e.g. dropdown menus) that would make it easier for users to find certain pages, and 
            reformatting other text on the site to make it easier to read (e.g. contact info). View the before and after below by clicking on the respective screenshots:
            </Typography>

            <Typography className="text">
                I first created lo-fi and hi-fi protoypes, using Balsamiq and Adobe XD, respectively, which can be viewed below:
            </Typography>

            <div className="screenshot-container">
            <div className="single-screenshot-container">
                    <Typography> <Box fontWeight="fontWeightBold">LOFI</Box></Typography>
                    <Typography className="text">
                    <ul>
                    <li>
                    <a href="https://invis.io/JGZ6GW8EW9S" style={{ textDecoration: 'none' }}>
      <Button size="small" color="primary">
          Desktop
        </Button></a>
                    </li>
                    <li>
                    <a href="https://invis.io/8GZ6GZ66J2C" style={{ textDecoration: 'none' }}>
      <Button size="small" color="primary">
          Tablet
        </Button></a>
                    </li>
                    <li>
                    <a href="https://invis.io/DQZ6H103Z7H" style={{ textDecoration: 'none' }}>
      <Button size="small" color="primary">
          Mobile
        </Button></a>
                    </li>
                </ul>
                    </Typography>
                    </div>

                    <div className="single-screenshot-container">
                    <Typography> <Box fontWeight="fontWeightBold">HIFI</Box></Typography>
                    <Typography className="text">
                    <ul>
                    <li>
                    <a href="https://xd.adobe.com/view/a3643d97-df8b-4cb4-b2ad-95bcde3d2abb-f637/?fullscreen" style={{ textDecoration: 'none' }}>
      <Button size="small" color="primary">
          Desktop
        </Button></a>
                    </li>
                    <li>
                    <a href="https://xd.adobe.com/view/64742bf8-4ed6-4117-8976-5a480fc8fa22-3127/" style={{ textDecoration: 'none' }}>
      <Button size="small" color="primary">
          Tablet
        </Button></a>
                    </li>
                    <li>
                    <a href="https://xd.adobe.com/view/50bf8023-b4ee-4eef-ba5d-c5f2a4344a13-05ec/" style={{ textDecoration: 'none' }}>
      <Button size="small" color="primary">
          Mobile
        </Button></a>
                    </li>
                </ul>
                    </Typography>
                    </div>
                
                </div>

                
                <Typography className="text">
                Finally, after prototyping, I redesigned the site using HTML and CSS. View the before and after below by clicking on the respective screenshots.
            </Typography>
            
            <div className="screenshot-container">
                <div className="single-screenshot-container">
                    <Typography> <Box fontWeight="fontWeightBold">BEFORE</Box></Typography>
                <a href="http://seafoamtradingco.com/"><img src={before} className="screenshot"/></a>
                </div>
                <div className="single-screenshot-container">
                <Typography> <Box fontWeight="fontWeightBold">AFTER</Box></Typography>
                <a href="https://stark-coast-27589.herokuapp.com/"><img src={after} className="screenshot"/></a>
                </div>
                
                
            </div>
            <Typography variant='h4' className="project-subtitle">Conclusion</Typography> 
                
            <Typography className="text">

            My main takeway from this project is that, although widely studied, usability issues can still be found throughout many modern websites that people 
                use today. By going through the process of responsively redesigning an existing site, I found that there are many design considerations and tradeoffs
                that designers must make. I was surprised to find that the bulk of the work in designing a site, at least for this project, lied in the pre-planning 
                and prototyping. This goes to show that a considerable amount of planning and thought is needed to design a website exhibiting good usability principles.
                
            </Typography>

            <Typography className="text">
                <b>Note:</b> This is a summarized version of the project. Click <a href="https://cryptic-crag-03189.herokuapp.com/" style={{ textDecoration: 'none' }}> <Button size="small" color="primary"> Here</Button></a> to view the original 
                report containing full details and images.
            </Typography>
        </div>
    );
}

export default Redesign;

