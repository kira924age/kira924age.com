import { h } from "preact";
import { FAVORITE_ANIME_LIST } from "../../constants/anime";

import style from "./style.css";

const Anime = () => {
  return (
    <div class={style.animeContainer}>
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
