import { Typography } from "@material-ui/core";
import * as React from "react"
import './main.css';
import responsive from './redesign.png';
import iterative from './iterative.png';
import development from './development3.png';
import hashtags from './hashtags.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const pieces = [
    {
        name: "Responsive Redesign",
        image: responsive,
        link: "/redesign",
        desc: "Redesigning the website of a local Providence business based on the usability principles of user interface design",
    },
    {
        name: "Iterative Design",
        image: iterative,
        link: "/iterative",
        desc: "Designing an interface for the emerging startup Kuleana through an iterative process with feedback from peers, industric critics, and users",
    },
    {
        name: "Development",
        image: development,
        link: "/development",
        desc: "Creating a list interface for a fictional business, Jeff's Dessert Shop, using ReactJS",
    },
    {
        name: "Hashtag Activism",
        image: hashtags,
        link: "/hashtags",
        desc: "Exploring where real-life events and social media come together by analyzing how events impact hashtag interaction on Twitter",
    },
]

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Home = () => {
    const classes = useStyles();
    return (
        <div className="main">
            <Typography className="intro-text" variant='h2'>Hi there, my name is Phil.</Typography>
            <Typography className="intro-text-sub" variant='h5'>I'm a student at Brown University mainly working in AI/Machine Learning and Data Science
            <p>... but currently learning UI/UX design.</p></Typography>
            <div className="pieces">
                {pieces.map(piece => 
    <div className="project">            
    <Card className={classes.root}>
      <CardActionArea>
          <Link to={piece.link} style={{ textDecoration: 'none' }}>
        <CardMedia
          className={classes.media}
          image={piece.image}
          title={piece.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{ color: 'black' }}>
          {piece.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {piece.desc}
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
      <Link to={piece.link} style={{ textDecoration: 'none' }}>
      <Button size="small" color="primary">
          Learn More
        </Button></Link>
        
      </CardActions>
    </Card>
                     </div>

                    
                )}
            </div>
            <div className="project-div">
            <Typography variant='h4' className="project-subtitle" style={{textAlign: 'center'}}>
                Interested in learning more?
            </Typography>
            <Typography className="text" style={{textAlign: 'center'}}>
            Feel free to shoot me an <Button size="small" color="primary"> email</Button> to chat!
            Or, say ‘hi’ on <Button size="small" color="primary"> LinkedIn</Button>!
            <p>(these are dummy links for anonymity's sake - will be filled in a non-anonymous version)</p>
            </Typography>
            </div>
            
            <Typography className="made-w-love">Made with &#128156;</Typography>
        </div>
    );
}

export default Home;
