import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Frontpage from "./views/Frontpage";
import Contact from "./views/Contact";
import Insights from "./views/Insights";
import Services from "./views/Services";

function App() {
document.title = "Warisan Strategic Advisory"
    return (
      <Router basename="/">
        <div>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/insights" component={Insights} />
            <Route path="/services" component={Services} />
            <Route path="/" component={Frontpage} />
          </Switch>
        </div>
      </Router>
    )
}

export default App;
