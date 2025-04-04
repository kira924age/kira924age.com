import { render } from "preact";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router";

import { App } from "./app.tsx";
import { Home } from "@/pages/Home";
import { Anime } from "@/pages/Anime";
import { AnimeDetail } from "@/pages/AnimeDetail";
import { Manga } from "@/pages/Manga";
import { MangaDetail } from "@/pages/MangaDetail";
import { Music } from "@/pages/Music";

import "./app.scss";

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration />
        <App />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "anime", element: <Anime /> },
      { path: "anime/:animeId", element: <AnimeDetail /> },
      { path: "manga", element: <Manga /> },
      { path: "manga/:mangaId", element: <MangaDetail /> },
      { path: "music", element: <Music /> },
    ],
  },
]);

const domElement: HTMLElement | null = document.getElementById("app");

if (domElement) {
  render(<RouterProvider router={router} />, domElement);
}
