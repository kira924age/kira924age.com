import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello. I'm an anime otaku. I'm a student at The University of
          Electro-Communications.
        </p>
      </section>

      <h3>Profile</h3>
      <ul>
        <li key="1">Handle: kira924age</li>
        <li key="2">
          Hobby: Anime (Watching), Manga (Reading), Cycling, Basketball
          (Watching & Playing), Game (CTF, Competitive programming)
        </li>
        <li key="3">Nationality: Japanese</li>
      </ul>

      <h3>Favorite Anime</h3>
      <ul>
        <li key="1">ローリング☆ガールズ (THE ROLLING GIRLS)</li>
        <li key="2">ゾンビランドサガ (Zombie Land Saga)</li>
        <li key="3">少女終末旅行 (Shoujo Shuumatsu Ryokou)</li>
        <li key="4">Fate/Zero</li>
        <li key="5">私に天使が舞い降りた! (Watashi ni Tenshi ga Maiorita!)</li>

        <Link href="/anime">
          <a>read more</a>
        </Link>
      </ul>

      <h3>Favorite Comics</h3>
      <ul>
        <li key="1">とある科学の超電磁砲 (Toaru Kagaku no Railgun)</li>
        <li key="2">ふたりエスケープ (Futari Escape)</li>
        <li key="3">NEW GAME!</li>
        <li key="4">はねバド！ (Hanebado!)</li>
        <li key="5">DEATH NOTE</li>
      </ul>

      <h3>Favorite Novels</h3>
      <ul>
        <li key="1">神様のメモ帳 (Heaven's Memo Pad)</li>
        <ul>
          <li key="1">Written by: 杉井光 (Hikaru Sugii)</li>
          <li key="2">Illustrated by: 岸田メル (Mel Kishida)</li>
        </ul>
        <li key="2">さくら荘のペットな彼女 (The Pet Girl of Sakurasou)</li>
        <ul>
          <li key="1">Written by: 鴨志田一 (Hajime Kamoshida)</li>
          <li key="2">Illustrated by: 溝口ケージ (Keiji Mizoguchi)</li>
        </ul>
      </ul>

      <h3>Favorite Songs</h3>
      <ul>
        <li key="1">STONES</li>
        <ul>
          <li key="1">Vocal: 鴨川ロッカーズ (Kamogawa Rockers)</li>
          <li key="2">
            Remarks: This song is background music of "ローリング☆ガールズ(THE
            ROLLING GIRLS)" at episode 8.
          </li>
        </ul>

        <li key="2">ヨミガエレ (Yomigaere)</li>
        <ul>
          <li key="1">Vocal: フランシュシュ (Franchouchou)</li>
          <li key="2">
            Remarks: This song is background music of "ゾンビランドサガ (Zombie
            Land Saga)" at episode 2 and 12.
          </li>
        </ul>

        <li key="3">傷跡 (Kizuato)</li>
        <ul>
          <li key="1">Vocal: Kalafina</li>
          <li key="2">
            Remarks: This song is the ending theme music of "空の境界 第三章
            痛覚残留 (The Garden of Sinners: Remaining Sense of Pain)".
          </li>
        </ul>

        <li key="4">夕立方程式 (Yuudachi Houteishiki)</li>
        <ul>
          <li key="1">
            Vocal: 老倉育 (上麻里奈) (Sodatchi Oikura (Marina Inoue))
          </li>
          <li key="2">
            Remarks: This song is the opening theme music of "終物語
            そだちロスト (Owarimonogatari Sodachi Lost)".
          </li>
        </ul>

        <li key="5">キミガタメ (Kimigatame)</li>
        <ul>
          <li key="1">Vocal: Suara</li>
          <li key="2">
            Remarks: This song is the ending theme music of "うたわれるもの
            (Utawarerumono)" at episode 26.
          </li>
        </ul>
      </ul>

      <h3>Links</h3>
      <ul>
        <li key="1">
          Twitter: <a href="https://twitter.com/kira924age">@kira924age</a>
        </li>
        <li key="2">
          GitHub: <a href="https://github.com/kira924age">kira924age</a>
        </li>
        <li key="3">
          Annict: <a href="https://annict.com/@kira924age">@kira924age</a>
        </li>
        <li key="4">
          Hatena Blog1:{" "}
          <a href="https://kira000.hatenadiary.jp/">kira924ageの雑記帳</a>
        </li>
        <li key="5">
          Hatena Blog2:{" "}
          <a href="https://kira924age.hatenadiary.com/">kira924age’s note</a>
        </li>
      </ul>
    </Layout>
  );
}
