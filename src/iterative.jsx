import { Typography, Button } from "@material-ui/core";
import * as React from "react"
import './main.css';
import iterative from './iterative.png';

const Iterative = () => {
    return (
        <div className="project-div">

            <Typography variant='h3' className="project-title">Iterative Design</Typography>
            <Typography variant='h4' className="project-subtitle">Overview</Typography>

            <Typography className="text">
            This was a project for CS1300: User Interface and Experience at Brown University, in which I worked in a group to design an interface for an emerging startup called 
            Kuleana by sketching ideas of the interface, designing an interactive, high-fidelity prototype, and conducting user testing on this final prototype. Our final high-fidelity 
            prototype can be found 
            <a href="https://www.figma.com/proto/mqTJLMWseGc08rKOPgbgJp/HiFi?node-id=28%3A4&scaling=min-zoom" style={{ textDecoration: 'none' }}> <Button size="small" color="primary"> Here</Button></a>.
            </Typography>

            <Typography variant='h4' className="project-subtitle">Introduction</Typography>
            <Typography className="text">
            Kuleana is a startup that specializes in plant based raw tuna. There are several companies that make vegetable based meat substitutes, such as Beyond Meat, but currently, 
            there is yet to be an established seafood equivalent. Kuleana hopes to capitalize on this by creating 100 percent plant based, sushi-grade raw tuna so that consumers can enjoy 
            fish without the environmental and ethical consequences.
            </Typography>

            <Typography variant='h4' className="project-subtitle">Context</Typography>
            

            <Typography className="text">
            The goal of this project was to design an interface for an emerging startup. Our group chose to design a website for Kuleana with the purpose of informing consumers about the 
            product and company while providing an easy way to purchase the tuna. Because we focused our design on being intuitive and simple, new and returning customers will be impacted by 
            having a faster experience purchasing the tuna. After many iterations of sketches and wireframes, the project culminated in completing a final hifi mockup of what a website made 
            for Kuleana might look like. We then conducted user testing of this final prototype using the remote user testing service 
            <a href="https://www.usertesting.com/" style={{ textDecoration: 'none' }}> <Button size="small" color="primary">Usertesting.com</Button></a>.
            </Typography>

            <Typography variant='h4' className="project-subtitle">Design Process</Typography>
            <Typography className="text">
            After making 4 initial sketches (which can be viewed in our <a href="https://stormy-fjord-40335.herokuapp.com/?fbclid=IwAR1cfoVYyLjRkJNZ30wcYnpGcDHm_q2I2s66Qm4YDZwXpQQBPuXuqcRoGdo" style={{ textDecoration: 'none' }}> <Button size="small" color="primary"> full report</Button></a>) and deciding on a final design, we used Figma to create a hi-fi prototype - an enhanced version of our final wireframe - populated with realistic content. This involved making several design choices:
            <ul>
                            <li><b>Hierarchy: </b>We chose fonts and font sizes based on their function on the site. For example, we had one main title font and font size. Smaller titles followed a consistent styling and size as well, and we also had a consistent paragraph font size.</li>
                            <li><b>Interaction: </b>We decided to focus on making interaction straight-forward and easy to use. For example, we provided explicit instructions on hovering on our Mission page to eliminate any possible confusion. Furthermore, clickable elements would be enlarged and have a green border upon hover to make it clear that they can be clicked.</li>
                            <li><b>Navigation: </b>Our navbar contained the main sections of the site, which were accessible from every page. Certain pages also featured buttons that would navigate to different parts of the site such as the checkout button on the shop page.</li>
                        </ul>
            </Typography>

            
            

            <Typography className="text">
                We received feedback from peers as well as an industry crtic in a mockup crit in studio sections, which we took into consideration for our final design. 
                View the feedback we received and the changes we made in response  <a href="https://stormy-fjord-40335.herokuapp.com/?fbclid=IwAR1cfoVYyLjRkJNZ30wcYnpGcDHm_q2I2s66Qm4YDZwXpQQBPuXuqcRoGdo#mockup" style={{ textDecoration: 'none' }}> <Button size="small" color="primary"> Here</Button></a>
            
                
            </Typography>
            <div className="screenshot-container">

            
            <div className="single-screenshot-container">
            <Typography className="text">
            Click on the screenshot below to try out our prototype!
            </Typography>
            <a href="https://www.figma.com/proto/mqTJLMWseGc08rKOPgbgJp/HiFi?node-id=28%3A4&scaling=min-zoom"><img src={iterative} className="screenshot"/></a>
            </div>
            </div>

            <Typography variant='h4' className="project-subtitle">User Testing</Typography>
            <Typography className="text">
            Having test participants try out an interface is an important part of testing and a valuable source of feedback. We conducted our own usability test through a remote user testing 
            service (<a href="https://www.usertesting.com/" style={{ textDecoration: 'none' }}> <Button size="small" color="primary">Usertesting.com</Button></a>), using our interactive hi-fi 
            prototype. We selected one task (which consisted of several sub-tasks) that we wanted users to complete on our interactive prototype.
                    
            </Typography>

            <Typography className="text">
            Overall, the responses and results were in line with our expectations, however, we noticed a few pain points.
                        <ul>
                            <li>At times, users struggled with the nav bar because Figma’s overlay would occasionally cover it.</li>
                            <li>Two users failed to realize that the Mission page held more information at the bottom of the page in one of the bubbles. User 1 also failed to realize that the page was scrollable.</li>
                            <li>User 1 never clicked on the clickable post on the Community page.</li>
                            <li>To improve the design, all users suggested making pages more animated and interesting.</li>
                            <li>User 3 suggested including a title for the product on the Shop page for scalability if we expand our product line.</li>
                        </ul>
                        <i>Despite these, all users noted that the website had a very clean aesthetic and was intuitive and easy-to-use.</i>
            </Typography>

        <Typography className="text">
            View more details on our user testing and analysis <a href="https://stormy-fjord-40335.herokuapp.com/?fbclid=IwAR1cfoVYyLjRkJNZ30wcYnpGcDHm_q2I2s66Qm4YDZwXpQQBPuXuqcRoGdo#testing" style={{ textDecoration: 'none' }}> <Button size="small" color="primary">here</Button></a>
        </Typography>

        <Typography variant='h4' className="project-subtitle">Conclusion</Typography>
        <Typography className="text">
        This project helped show that brainstorming, collecting user feedback, and iterating over many different website designs helps create unique perspectives that lead to a more creative 
        and effective end result. Comparing our initial assumptions about workflow with our user testing feedback revealed any unintuitive or inconsistent interactions, and thus helped us 
        improve our website.
        </Typography>

        <Typography className="text">
                <b>Note:</b> This is a summarized version of the project. Click <a href="https://stormy-fjord-40335.herokuapp.com/" style={{ textDecoration: 'none' }}> <Button size="small" color="primary"> Here</Button></a> to view the original 
                report containing full details and images.
            </Typography>
            
        </div>
    );
}

export default Iterative;