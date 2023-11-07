import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/layout'

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
        <li>ヨミガエレ</li>
        <li>傷跡</li>
        <li>夕立方程式</li>
        <li>キミガタメ</li>
        <li>アオくユレている</li>
        <li>ロクデナシ</li>
        <li>情熱の薔薇</li>
        <li>1000のバイオリン</li>
        <li>月の爆撃機</li>
        <li>終わらない歌</li>
        <li>白金ディスコ</li>
        <li>リアルワールド</li>
        <li>神のまにまに</li>
        <li>again / YUI</li>
        <li>BELIEVE IN NEXUS</li>
        <li>正解はひとつ!じゃない!!</li>
        <li>月光</li>
      </ul>
    </Layout>
  )
}

export default Song
