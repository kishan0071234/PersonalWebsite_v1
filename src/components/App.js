import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import AboutMePage from "./about/AboutMePage";
import Experience from "./experience/Experience";
import ProjectPage from "./projects/ProjectPage";
import BlogPage from "./blogs/BlogPage";

function App() {
  return (
    <HashRouter basename="/">
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={AboutMePage} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/blogs" component={BlogPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
