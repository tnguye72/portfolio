import logo from './logo.svg';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./home";
import About from './about';
import Redesign from './redesign';
import Iterative from './iterative';
import Development from './development';
import Hashtags from './hashtags';
import Header from "./header";
import Resume from "./resume";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <Router>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route exact path="/about" component={withRouter(About)} />
          <Route exact path="/resume" component={withRouter(Resume)} />
          <Route exact path="/redesign" component={withRouter(Redesign)} />
          <Route exact path="/iterative" component={withRouter(Iterative)} />
          <Route exact path="/development" component={withRouter(Development)} />
          <Route exact path="/hashtags" component={withRouter(Hashtags)} />
        </Switch>
      
    </Router>
  );
}

export default App;
