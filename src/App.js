import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
const NotFound = () => <h1> nie znaleziono </h1>;
function App() {
  return (
    <>
   <HashRouter>
       <Switch>
           <Route exact path={'/'} component={Home}/>
           <Route component={NotFound}/>
       </Switch>
   </HashRouter>
    </>
  );
}
export default App;
