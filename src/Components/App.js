import React from 'react';
import Navbar from './Navbar/Navbar';
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from "react-browser-router";
import Home from './Home';
import Safari from './Safari';
import MeetMathar from './MeetMathar';

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/safari" component={Safari} />
          <Route exact path="/meet-mathar" component={MeetMathar} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
