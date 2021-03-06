import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function FavoriteManga() {
  return (
    <Layout>
      <Head>
        <title>Favorite Manga</title>
      </Head>
      <h2>Favorite Manga</h2>
      Following list shows my favorite manga.
      <ul>
        <li key="1">とある科学の超電磁砲 (Toaru Kagaku no Railgun)</li>
        <li key="2">ふたりエスケープ (Futari Escape)</li>
        <li key="3">お兄ちゃんはおしまい！ (Oniichan wa Oshimai!)</li>
        <li key="4">NEW GAME!</li>
        <li key="5">はねバド！ (Hanebado!)</li>
        <li key="6">DEATH NOTE</li>
      </ul>
    </Layout>
  );
}
