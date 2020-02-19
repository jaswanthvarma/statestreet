import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Transactions from './Pages/Transactions';
import ViewTransaction from './Pages/ViewTransaction';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Transactions} />
        <Route path="/view-transaction/:account_no" component={ViewTransaction} />
      </Switch>
    </Router>
  );
}

export default App;
