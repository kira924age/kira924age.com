import { h } from "preact";
import { FAVORITE_MUSIC_LIST } from "../../constants/music";

import style from "./style.css";

const Music = () => {
  return (
    <div class={style.mangaContainer}>
      <h1>Music</h1>
      <p>Following list shows my favorite music.</p>

      <ul>
        {FAVORITE_MUSIC_LIST.map((music) => {
          return <li key={music.id}>{music.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Music;
