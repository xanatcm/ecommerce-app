import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Context
import { StoreProvider } from './Context/StoreContext/StoreContex';

//Components
import Home from './Pages/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import Confirm from './Components/Confirm/Confirm'

//Styles
import './App.css';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/checkout" exact>
            <CheckOut />
          </Route>

          <Route path="/confirm" exact>
            <Confirm />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
