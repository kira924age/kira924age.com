import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function FavoriteSong() {
  return (
    <Layout>
      <Head>
        <title>Favorite Song</title>
      </Head>
      <h2>Favorite Song</h2>
      Following list shows my favorite song.
      <ul>
        <li key="1">STONES</li>
        <li key="2">ヨミガエレ (Yomigaere)</li>
        <li key="3">傷跡 (Kizuato)</li>
        <li key="4">夕立方程式 (Yuudachi Houteishiki)</li>
        <li key="5">キミガタメ (Kimigatame)</li>
        <li key="6">アオくユレている (Aokuyureteiru)</li>
        <li key="7">情熱の薔薇 (Jounetsu no Bara)</li>
        <li key="8">1000のバイオリン (Sen no Violin)</li>
        <li key="9">月の爆撃機 (Tsuki no Bakugekiki)</li>
        <li key="10">終わらない歌 (Owaranai Uta)</li>
        <li key="11">白金ディスコ (Platinum Disco)</li>
      </ul>
    </Layout>
  );
}
