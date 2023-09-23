import Head from 'next/head';
import React from 'react';
import { Layout } from '../components/layout';

const Song: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Favorite Song</title>
      </Head>
      <h2>Song</h2>
      <p>好きな楽曲を紹介するページです。</p>
      <h3>Favorite Song</h3>
      Following list shows my favorite song.
      <ul>
        <li>only my railgun</li>
        <li>STONES</li>
        <li>ヨミガエレ (Yomigaere)</li>
        <li>傷跡 (Kizuato)</li>
        <li>夕立方程式 (Yuudachi Houteishiki)</li>
        <li>キミガタメ (Kimigatame)</li>
        <li>アオくユレている (Aokuyureteiru)</li>
        <li>情熱の薔薇 (Jounetsu no Bara)</li>
        <li>1000のバイオリン (Sen no Violin)</li>
        <li>月の爆撃機 (Tsuki no Bakugekiki)</li>
        <li>終わらない歌 (Owaranai Uta)</li>
        <li>白金ディスコ (Platinum Disco)</li>
        <li>リアルワールド (Real World)</li>
        <li>神のまにまに (Kami no Manimani)</li>
        <li>again / YUI</li>
        <li>BELIEVE IN NEXUS</li>
      </ul>
    </Layout>
  );
};

export default Song;
