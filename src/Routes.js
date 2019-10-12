import React from "react";
import { Switch, Route } from "react-router-dom";
// import Welcome from './entry';
// import Profile from './profile';
// import SignUp from './entry/sign-up.js';
// import SignIn from './entry/sign-in.js';
// import F404 from './entry/F404.js';
import Main from './main/main.js';

const Routes = () => {
  return (
    <Switch>
      <Route path="/getwell" component={Main} />
      <Route path="/" component={Main} />
    </Switch>
  );
};

export default Routes;



// <Route path="/welcome" component={Welcome} />
// <Route path="/signup" component={SignUp} />
// <Route path="/404" component={F404} />
// <Route path="/signin" component={SignIn} />
