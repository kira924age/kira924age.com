import { h } from "preact";
import { FAVORITE_MANGA_LIST } from "../../constants/manga";

import style from "./style.css";

const Manga = () => {
  return (
    <div class={style.mangaContainer}>
      <h1>Manga</h1>
      <p>Following list shows my favorite manga.</p>

      <ul>
        {FAVORITE_MANGA_LIST.map((manga) => {
          return <li key={manga.id}>{manga.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Manga;
