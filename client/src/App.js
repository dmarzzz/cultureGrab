import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./HomePage";
import HomePage1 from "./HomePage1";
// whoops/whoops/
import Blog from "./blog/blog/Blog.js";
import Blog1 from "./blog/blog/Blog1.js";
import Article from "./blog/blog/Article";
import Article1 from "./blog/blog/Article1";

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
          <Route path="/blog1">
            <Blog1 />
          </Route>
          <Route path="/music/Suspiria">
            <Article />
          </Route>
          <Route path="/music/Suspiria1">
            <Article1 />
          </Route>
          <Route path="/1">
            <HomePage1 />
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
