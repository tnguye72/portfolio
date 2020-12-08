import * as React from "react"
import logo from './logo.png';
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import './main.css';
import { Link } from "react-router-dom";



const navLinks = [
    { title: `home`, path: `/` },
    { title: `about`, path: `/about` },
    { title: `resume`, path: `/resume` },
  ];


const useStyles = makeStyles( theme => ({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
        
      },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
        [theme.breakpoints.down("xs")]: {
            display: 'flex',
            flexDirection: 'column',
          },
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: '#707070',
    },
}));



const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{background: '#FFFFFF'}} className="nav-bar">
        
            <Toolbar className={classes.toolBarDisplay}>
            <Container maxWidth='xl' className={classes.navbarDisplayFlex}>
                <Link to="/"><img className="logo" src={logo}/></Link>
                

                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                    {navLinks.map(({ title, path }) => (
                        <a href={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </a>
                    ))}
                </List>
                </Container>
            </Toolbar>
        
        </AppBar>
    )
}
export default Header