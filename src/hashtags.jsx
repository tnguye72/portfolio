import { Typography , Button} from "@material-ui/core";
import * as React from "react"
import './main.css';
import poster from './poster.png';

const Hashtags = () => {
    return (
        <div className="project-div">
            <Typography variant='h3' className="project-title">Hashtag Activism</Typography>
            <Typography variant='h4' className="project-subtitle">Overview</Typography>
            <Typography className="text">
            This was the final project for CS1951A: Data Science at Brown University, for which I worked in a group to extract, process, analyze and create visualizations of data of our own
            choosing to answer a research question. This culminated in a poster, which we presented at the end of the semester.
            </Typography>
            <Typography variant='h4' className="project-subtitle">Introduction / Context</Typography>
            <Typography className="text">
            Hashtag activism has become an increasingly common way to
fuel social movements. We wanted to explore where real-life
events and social media come together by analyzing how events
impact hashtag interaction on Twitter.
            </Typography>

            <Typography variant='h4' className="project-subtitle">Hypothesis / Approach</Typography>
          <Typography className="text">Triggering events will cause a greater increase in hashtag usage than activism events. We used percent changes one day before 
          and one day after an event in order to measure the increase, coupled with t-tests to determine statistical significance.</Typography>
            <Typography variant='h4' className="project-subtitle">Data</Typography>
            <Typography className="data">
            <ul>
          <li> <b>Counts:</b> We used the counts endpoint of the Twitter Full Archive Search API to collect the number of tweets per day that contain one of the given hashtags.</li>
          <li> <b>Events:</b> To create our Events dataset, we selected 20 events for each movement from our research, 10 of which are categorized as “triggering” (shootings, scandals, etc) and the other 10 categorized as “activism” (marches, protests).</li>
          <li> <b>Movements:</b> We selected three social movements to focus our project on and created a table including data (such as the time range and associated hashtags) about each one. </li>
          </ul>
          </Typography>
        
          <Typography variant='h4' className="project-subtitle">Methodology</Typography>
          <Typography className="text">
          For each event, we calculated the percent change of tweet counts
between the day before and the day of. For the control groups,
we calculated percent change for 10 randomly selected days not
within one day of any event. For each social movement, we conducted 3 t-tests:
<ul>
    <li>
    Triggering vs. activism events
    </li>
    <li>
    Triggering events vs. control days
    </li>
    <li>
    Activism events vs. control days
    </li>
</ul>

          </Typography>
          
          <Typography variant='h4' className="project-subtitle">Analysis</Typography>
          <Typography className="text">
          After conducting multiple t-tests, results showed that we fail to reject the null hypothesis, which is that there is no difference between percentage changes before and after an event based on event type 
          (triggering vs. activism). In other words, there is not enough evidence to conclude that there is a difference in the impact of triggering vs. activism events in regards to 
          tweet count. Intuitively, this outcome makes sense because triggering events, such as sexual assault cases, could have similar effects to activism events, such as the Women’s 
          March, on people’s passion for a movement, and thus, their number of tweets. We originally thought that the passion ignited by triggering events would be stronger than that of 
          activism events and would result in a stronger impact by triggering events on tweet counts, but it turns out that there is not a significant difference. This may be because the 
          organized nature of activism events, such as protests, similarly contributes to tweet counts as the anger stemmed from triggering events.
          </Typography>

          <Typography variant='h4' className="project-subtitle">Final Poster</Typography>
          
            <div className="poster-container">
            <Typography className="text" style={{textAlign: 'center'}}>
              The following poster (click to view full size) shows our full results, visualization, and analysis:
          </Typography>
            <a href="https://ibb.co/7K1gBCq"><img src={poster} className="poster"/></a>
            </div>
            
            <Typography variant='h4' className="project-subtitle">Takeaways</Typography>
            <Typography className="text">
                Working on this project was incredibly rewarding. We were able to choose an interesting and relevant research question, conduct our own data collection and analysis, and visualize
                our results in a meaningful way. Although creating the python scripts for data collection, visualization, and statistical calculations was certainly time-consuming, I learned a lot
                about the work that goes into data science research. In the future, it would be interesting to expand this project to involve recent events and see what the data tells us now, as 
                this project was done before the recent surge of the BLM movement in the summer of 2020 and other momentous events in 2020, such as COVID-19 pandemic and U.S. presidential election.
                Future work might also include other social media platforms, such as Facebook and Instagram. 
            </Typography>

            <Typography className="text">
                <b>Note:</b> This is a summarized version of the project. View more detailed information on our data collection and analysis as well as the project abstract below:
                <ul>
                    <li>
                    <a href="" style={{ textDecoration: 'none' }}> <Button size="small" color="primary">Data Collection</Button></a>
                        </li>
                        <li>
                    <a href="" style={{ textDecoration: 'none' }}> <Button size="small" color="primary">Analysis</Button></a>
                        </li>
                        <li>
                    <a href="" style={{ textDecoration: 'none' }}> <Button size="small" color="primary">Abstract</Button></a>
                        </li>
                        
                    </ul>

                    (The above links are currently dummy links, for purposes of anonymization.)
            </Typography>
        </div>
    );
}


export default Hashtags;
