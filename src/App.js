import React from "react";
import NavBar from "./components/Navbar";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { AlertState } from "./context/alert/alertState";
import { GithubState } from "./context/github/githubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <NavBar />
          <div className="container pt-4">
            <Switch>
              <Route path={"/about"} component={About} />
              <Route path={"/profile/:name"} component={Profile} />
              <Route path={"/"} component={Home} />
              <Redirect to={"/"} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
