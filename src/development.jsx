import { Typography, Button} from "@material-ui/core";
import * as React from "react"
import './main.css';
import development from './development3.png';

const Development = () => {
    return (
        <div className="project-div">
            <Typography variant='h3' className="project-title">Development</Typography>
            <Typography variant='h4' className="project-subtitle">Introduction / Context</Typography>
            <Typography className="text">
            This was a project for CS1300: User Interface and Experience at Brown University, in which I created a list interface using React. I opted to create a website for a fictional dessert shop, 
            Jeff's Dessert Shop, where users can sort the products by price as well as filter products by type and flavor. Users can also add and remove items from their cart.
            </Typography>

            <Typography variant='h4' className="project-subtitle">Problem / Approach</Typography>

            <Typography className="text">
            I designed my application with the following goals and values in mind:

            <div className="screenshot-container">
            <div className="single-screenshot-container">
            <b>Goals:</b>
<ul>
    <li>The application should be intuitive and easy to use.</li>
    <li>The application should be visually pleasing and effectively appeal to potential dessert buyers.</li>
    <li>The application effectively display all the information that a buyer may need before making a purchase (e.g. price of each item, total price, etc.).</li>
</ul>
            </div>
            <div className="single-screenshot-container">
            <b>Values:</b>
<ul>
    <li>Users should view this application as an easy and convenient way to make dessert purchases.</li>
    <li>The purchase process should be usable and memorable enough for users to want to come back to make another purchase.</li>
    <li>Users should enjoy the process of browsing through the products and making their choices for purchase.</li>
</ul>
            </div>
            


            </div>

            In order to achieve these goals and values, I designed the application with the following usability principles in mind:

            <ul>
                <li><b>Learnability: </b> Upon first use, I wanted users to be able to know exactly where to click to do a certain task.
                </li>
                <li><b>Efficiency: </b> I wanted users to be able to quickly do whatever task they set out to do on this application. 
                 </li>
            <li><b>Memorability: </b> I wanted users to be able to remember how to use this application if they ever came back to use it in the future.
                 </li>
            </ul>
            </Typography>
        
        <Typography variant='h4' className="project-subtitle">The Application</Typography>
        <div className="screenshot-container">
        <div className="single-screenshot-container">
        <Typography className="text">
        Click on the below screenshot to view Jeff's Dessert Shop! 
        </Typography>
        <a href="https://murmuring-fortress-61824.herokuapp.com/"><img src={development} className="screenshot"/></a>
        </div>
        </div>

        <Typography variant='h4' className="project-subtitle">Conclusion</Typography>

        <Typography className="text">
            As my first time developing in ReactJS, I learned a lot about web development logic, such as sorting and filtering, as well interactive UI. As list interfaces exist on virtually 
            every application that I regularly use, I thorougly enjoyed trying my own hand at learning the general architecture of a ReactJS applications. Overall, being able to apply usability 
            principles directly in application development was a rewarding experience. 
        </Typography>

        <Typography className="text">
                <b>Note:</b> This is a summarized version of the project. Click <a href="https://fathomless-hollows-32350.herokuapp.com/" style={{ textDecoration: 'none' }}> <Button size="small" color="primary"> Here</Button></a> to view the original 
                report containing full details and images.
            </Typography>
        
        
        </div>

    

    
    );
}

export default Development;