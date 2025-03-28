import { Router, Route } from "preact-router";

import { Header } from "@/components/Header";

import { Anime } from "@/pages/Anime";
import { AnimeDetail } from "@/pages/AnimeDetail";
import { Home } from "@/pages/Home";

import "./app.scss";
// import Manga from "../routes/manga";
// import Music from "../routes/music";

export const App = () => (
  <div id="app">
    <Header />
    <main>
      <Router>
        <Home path="/" />
        <Route path="/anime" component={Anime} />
        <AnimeDetail path="/anime/:animeId" />
      </Router>
    </main>
  </div>
);
