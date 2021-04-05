import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage"
import LandingPage from "./components/LandingPage/index"
import ExplorePage from "./components/ExplorePage"
import footer from "./components/Navigation/footer.css"
import main from "./components/Navigation/main.css"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="main">
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/explore">
            <ExplorePage />
          </Route>
        </Switch>
      )}

        <footer className="footer-master">
            <a  href="https://github.com/malikmoss">
                Github
            </a>

            <a  href="https://www.linkedin.com/in/cedmoss/">
                LinkedIn
            </a>

            <a href="https://github.com/malikmoss/mcflicc-w17-project-react">
                Repo
            </a>
        </footer>
    </div>
  );
}

export default App;
