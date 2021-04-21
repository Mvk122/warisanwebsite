import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Frontpage from "./views/Frontpage";
import Contact from "./views/Contact";
import Testimonials from "./views/Testimonials";
import Insights from "./views/Insights";

function App() {
document.title = "Warisan Strategic Advisory"
    return (
      <Router basename="/">
        <div>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/insights" component={Insights} />
            <Route path="/" component={Frontpage} />
          </Switch>
        </div>
      </Router>
    )
}

export default App;
