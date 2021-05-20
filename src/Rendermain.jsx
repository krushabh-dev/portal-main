import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Certified from './certified/Certified';


const Rendermain = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/certified" component={Certified} />
      </Switch>
    </>
  );
}

export default Rendermain
