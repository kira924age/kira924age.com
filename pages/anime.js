import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function FavoriteAnime() {
  return (
    <Layout>
      <Head>
        <title>My favorite Anime</title>
      </Head>
      <h2>My favorite Anime</h2>
      Following list shows my favorite anime.
      <ul>
        <li key="1">Fate/Zero</li>
        <li key="2">空の境界 (Kara no Kyoukai)</li>
        <li key="3">コードギアス (Code Geass)</li>
        <li key="4">少女終末旅行 (Shoujo Shuumatsu Ryokou)</li>
        <li key="5">SHIROBAKO</li>
        <li key="6">私に天使が舞い降りた! (Watashi ni Tenshi ga Maiorita!)</li>
        <li key="7">
          秒速5センチメートル (5 Centimeters per Second a chain of short stories
          about their distance)
        </li>
        <li key="8">氷菓 (Hyouka)</li>
        <li key="9">STEINS;GATE</li>
        <li key="10">のんのんびより (Non Non Biyori)</li>
        <li key="11">魔法少女まどか☆マギカ (Mahou Shoujo Madoka Magica)</li>
        <li key="12">刀語 (Katanagatari)</li>
        <li key="13">物語シリーズ (Monogatari Series)</li>
        <li key="14">響け！ユーフォニアム (Sound! Euphonium)</li>
        <li key="15">とある科学の超電磁砲 (Toaru Kagaku no Railgun)</li>
        <li key="16">さくら荘のペットな彼女 (The Pet Girl of Sakurasou)</li>
        <li key="17">恋する小惑星 (Koisuru Asteroid)</li>
        <li key="18">うたわれるもの (Utawarerumono)</li>
        <li key="19">
          ドラえもん のび太と雲の王国 (Doraemon Movie 13: Nobita to Kumo no
          Oukoku)
        </li>
        <li key="20">
          クレヨンしんちゃん 嵐を呼ぶ モーレツ!オトナ帝国の逆襲 (Eiga Crayon
          Shin-chan: Arashi wo Yobu Mouretsu! Otona Teikoku Gyakushuu)
        </li>
        <li key="21">魔女の宅急便 (Majo no Takkyuubin)</li>
        <li key="22">もののけ姫 (Mononoke Hime)</li>
        <li key="23">幸腹グラフィティ (Koufuku Graffiti)</li>
        <li key="24">三ツ星カラーズ (Mitsuboshi Colors)</li>
        <li key="25">
          キノの旅 -the Beautiful World- the Animated Series (Kino's Journey
          -the Beautiful World- the Animated Series)
        </li>
        <li key="26">N・H・Kにようこそ！ (Welcome to the N.H.K.)</li>
        <li key="27">
          人類は衰退しました (Jinrui wa Suitai Shimashita Specials)
        </li>
        <li key="28">
          あの日見た花の名前を僕達はまだ知らない。 (Ano Hi Mita Hana no Namae wo
          Bokutachi wa Mada Shiranai.)
        </li>
        <li key="29">聲の形 (Koe no Katachi)</li>
      </ul>
    </Layout>
  );
}
