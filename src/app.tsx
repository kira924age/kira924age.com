import { Routes, Route } from "react-router";

import { Header } from "@/components/Header";
import { Anime } from "@/pages/Anime";
import { AnimeDetail } from "@/pages/AnimeDetail";
import { Home } from "@/pages/Home";
import { Manga } from "@/pages/Manga";
import { MangaDetail } from "@/pages/MangaDetail";

import "./app.scss";
// import Music from "../routes/music";

export const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/anime/:animeId" element={<AnimeDetail />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/manga/:mangaId" element={<MangaDetail />} />
      </Routes>
    </main>
  </>
);
