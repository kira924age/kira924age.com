import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/layout";

const Novel: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Favorite Novels</title>
      </Head>
      <h2>Novels</h2>
      <p>好きな小説を紹介します。</p>
      <h3>Favorite Novels</h3>
      Following list shows my favorite novels
      <ul>
        <li>空の境界 (Kara no Kyoukai)</li>
        <li>Fate/Zero</li>
        <li>神様のメモ帳 (Heaven&apos;s Memo Pad)</li>
        <li>さくら荘のペットな彼女 (The Pet Girl of Sakurasou)</li>
        <li>裏世界ピクニック (Urasekai Picnic)</li>
        <li>たったひとつの冴えたやりかた (The Only Neat Thing to Do)</li>
      </ul>
    </Layout>
  );
};

export default Novel;
