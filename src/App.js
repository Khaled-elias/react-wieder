
import './App.css';
import Navigation from './components/Navigation'
import NavigationMobile from './components/NavigationMobil'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Counter from './components/Counter'
import BlogItem from './components/BlogItem'
import Erorr from './components/Erorr'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
    
      <Navigation  />
      <NavigationMobile />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/contact" component={Contact} exact />

        <Route path="/blog" component={Blog} exact />
        <Route path="/counter" component={Counter} exact />
        <Route path="/blog/:test" component={BlogItem} exact />
        

        <Route path="*" component={Erorr} />
          

      </Switch>
    
    </Router>

  );
}

export default App;
