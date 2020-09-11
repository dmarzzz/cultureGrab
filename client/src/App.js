import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./HomePage";
// whoops/whoops/
import Blog from "./blog/blog/Blog.js";
import Article from "./blog/blog/Article";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/music/Suspiria">
            <Article />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
