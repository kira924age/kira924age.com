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
          Hi. Welcome to my web site.
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
        <li key="2">明日ちゃんのセーラー服 (Akebi-chan no Sailor-fuku)</li>
        <li key="3">SHIROBAKO</li>
        <li key="4">少女終末旅行 (Shoujo Shuumatsu Ryokou)</li>
        <li key="5">Fate/Zero</li>

        <Link href="/anime">
          <a>read more</a>
        </Link>
      </ul>

      <h3>Favorite Manga</h3>
      <ul>
        <li key="1">NEW GAME!</li>
        <li key="2">とある科学の超電磁砲 (Toaru Kagaku no Railgun)</li>
        <li key="3">メイドインアビス (Made in Abyss)</li>
        <li key="4">お兄ちゃんはおしまい！ (Oniichan wa Oshimai!)</li>
        <li key="5">はねバド！ (Hanebado!)</li>

        <Link href="/manga">
          <a>read more</a>
        </Link>
      </ul>

      <h3>Favorite Novels</h3>
      <ul>
        <li key="1">空の境界 (Kara no Kyoukai)</li>
        <li key="2">Fate/Zero</li>
        <li key="3">神様のメモ帳 (Heaven's Memo Pad)</li>
        <li key="4">さくら荘のペットな彼女 (The Pet Girl of Sakurasou)</li>
        <li key="5">裏世界ピクニック (Urasekai Picnic)</li>
      </ul>

      <h3>Favorite Songs</h3>
      <ul>
        <li key="1">STONES</li>
        <li key="2">ヨミガエレ (Yomigaere)</li>
        <li key="3">傷跡 (Kizuato)</li>
        <li key="4">夕立方程式 (Yuudachi Houteishiki)</li>
        <li key="5">キミガタメ (Kimigatame)</li>

        <Link href="/song">
          <a>read more</a>
        </Link>
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
          GAMEMO: <a href="https://gamemo.app/@kira924age">@kira924age</a>
        </li>
        <li key="5">
          Hatena Blog1:{" "}
          <a href="https://kira000.hatenadiary.jp/">kira924ageの雑記帳</a>
        </li>
        <li key="6">
          Hatena Blog2:{" "}
          <a href="https://kira924age.hatenadiary.com/">kira924age’s note</a>
        </li>
      </ul>

      <h3>Contact</h3>
      <p>
        Contact me at kira924age@gmail.com or{" "}
        <a
          href="https://twitter.com/kira924age"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </p>
    </Layout>
  );
}
