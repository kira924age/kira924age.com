import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Anime from "../routes/anime";
import Manga from "../routes/manga";
import Music from "../routes/music";

const App = () => (
  <div id="app">
    <Header />
    <main>
      <Router>
        <Home path="/" />
        <Anime path="/anime" />
        <Manga path="/manga" />
        <Music path="/music" />
      </Router>
    </main>
  </div>
);

export default App;
