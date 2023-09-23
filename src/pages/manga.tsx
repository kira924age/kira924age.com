import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/layout'

const Manga: React.FC = () => {
  console.log('hoge')
  return (
    <Layout>
      <Head>
        <title>Favorite Manga</title>
      </Head>
      <h2>Manga</h2>
      <p>漫画のことを書くページです。</p>
      <h3>Favorite Manga</h3>
      Following list shows my favorite manga.
      <ul>
        <li>NEW GAME!</li>
        <li>とある科学の超電磁砲 (Toaru Kagaku no Railgun)</li>
        <li>メイドインアビス (Made in Abyss)</li>
        <li>お兄ちゃんはおしまい！ (Oniichan wa Oshimai!)</li>
        <li>はねバド！ (Hanebado!)</li>
        <li>推しの子 (Oshi no Ko)</li>
        <li>DEATH NOTE</li>
        <li>げんしけん (Genshiken)</li>
        <li>笑顔のたえない職場です。 (Egao no Taenai Shokuba desu.)</li>
        <li>スクールゾーン (School Zone)</li>
        <li>欠けた月とドーナッツ (Kaketa Tsuki to Doughnut)</li>
        <li>少女終末旅行</li>
        <li>千早さんはそのままでいい</li>
        <li>まちカドまぞく(Machikado Mazoku)</li>
      </ul>
    </Layout>
  )
}

export default Manga
