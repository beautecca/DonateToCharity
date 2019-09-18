import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
const NotFound = () => <h1> nie znaleziono </h1>;
function App() {
  return (
    <>
   <HashRouter>
       <Switch>
           <Route exact path={'/'} component={Home}/>
           <Route path={'/logowanie'} component={Login} />
           <Route path={'/rejestracja'} component={Register} />
           <Route component={NotFound}/>
       </Switch>
   </HashRouter>
    </>
  );
}
export default App;
