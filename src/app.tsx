import { Router, Route } from "preact-router";

import { Header } from "@/components/Header";
import { Anime } from "@/pages/Anime";
import { AnimeDetail } from "@/pages/AnimeDetail";
import { Home } from "@/pages/Home";

import "./app.scss";
// import Manga from "../routes/manga";
// import Music from "../routes/music";

export const App = () => (
  <>
    <Header />
    <main>
      <Router onChange={() => window.scrollTo(0, 0)}>
        {/* @ts-ignore */}
        <Home path="/" />
        {/* @ts-ignore */}
        <Route path="/anime" component={Anime} />
        {/* @ts-ignore */}
        <AnimeDetail path="/anime/:animeId" />
      </Router>
    </main>
  </>
);
