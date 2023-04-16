import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function FavoriteManga() {
  return (
    <Layout>
      <Head>
        <title>Favorite Novels</title>
      </Head>
      <h2>Favorite Novels</h2>
      Following list shows my favorite novels
      <ul>
        <li key="1">空の境界 (Kara no Kyoukai)</li>
        <li key="2">Fate/Zero</li>
        <li key="3">神様のメモ帳 (Heaven&apos;s Memo Pad)</li>
        <li key="4">さくら荘のペットな彼女 (The Pet Girl of Sakurasou)</li>
        <li key="5">裏世界ピクニック (Urasekai Picnic)</li>
      </ul>
    </Layout>
  );
}
