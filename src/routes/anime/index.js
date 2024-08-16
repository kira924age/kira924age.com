import { h } from "preact";
import { FAVORITE_ANIME_LIST } from "../../constants/anime";
// import { useEffect, useState } from 'preact/hooks';

// Note: `user` comes from the URL, courtesy of our router
const Anime = () => {
  return (
    <div>
      <h1>Anime</h1>
      <p>Following list shows my favorite anime</p>

      <ul>
        {FAVORITE_ANIME_LIST.map((anime) => {
          return <li key={anime.id}>{anime.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Anime;
