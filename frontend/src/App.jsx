import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Heart from './Heart';
import Service from './Service';

const App = () =>{
    return(
    <>
    <BrowserRouter>
       <Switch>
        <Route exact path="/">
            <Service/>
        </Route>
        <Route path="/heart">
            <Heart/>
        </Route>
      </Switch>
      </BrowserRouter>
    </>
    )
}

export default App;