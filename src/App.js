import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './containers/Home';
import { AddEmployee } from './containers/AddEmployee';
import { EditEmployee } from './containers/EditEmployee';
import { StoreContainer } from "./store/store"


function App() {
  return (
    <StoreContainer.Provider>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={EditEmployee} exact />
      </Switch>
      </BrowserRouter>
    </StoreContainer.Provider>
  );
}

export default App;