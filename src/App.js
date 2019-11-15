import React from 'react';
import './App.css';
import "react-bulma-components/dist/react-bulma-components.min.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import withAuthCheck from "./utils/withAuthCheck";
import Login from "./components/Login";
import Jokes from './components/Jokes';


function App() {
  return (
    <Router>
      <div className="App">
      <FancyNav>
          <NavLink to='/'>Login</NavLink>
          <NavLink to='/jokes'>See Jokes</NavLink>
        </FancyNav>
        <Route exact path="/" component={Login} />

         <Route path = '/jokes' render = {props => withAuthCheck(Jokes, props)} />
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}
const FancyNav = styled.nav`
  display: flex;
  flex-direction: column;
  /* border: .1rem solid; */
  /* justify-content: center; */

  a {
    font-size: 1.7rem;
    margin-top: 4rem;
  }
`
export default App;