import { Routes, Route } from "react-router";

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
      <Routes>
        <Route index element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/anime/:animeId" element={<AnimeDetail />} />
      </Routes>
    </main>
  </>
);
