import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Frontpage from "./views/Frontpage";
import Contact from "./views/Contact";
import Testimonials from "./views/Testimonials";

function App() {
document.title = "Warisan Consulting"
    return (
      <Router basename="/">
        <div>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/" component={Frontpage} />
          </Switch>
        </div>
      </Router>
    )
}

export default App;
