import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello. I'm an anime otaku. I'm a student at The University of Electro-Communications.
        </p>
      </section>

      <h3>Profile</h3>
      <ul>
        <li key="1">Handle: kira924age</li>
        <li key="2">Nationality: Japanese</li>
      </ul>

      <h3>My favorite Anime</h3>
      <ul>
        <li key="1">Fate/Zero</li>
        <li key="2">空の境界 (Kara no Kyoukai)</li>
        <li key="3">コードギアス (Code Geass)</li>
        <li key="4">少女終末旅行 (Shoujo Shuumatsu Ryokou)</li>
        <li key="5">SHIROBAKO</li>

        <Link href = "anime"><a>read more</a></Link>
      </ul>

      <h3>Links</h3>
      <ul>
        <li key="1">Twitter: <a href="https://twitter.com/kira924age">@kira924age</a></li>
        <li key="2">Github: <a href="https://github.com/kira924age">kira924age</a></li>
        <li key="3">Hatena Blog1: <a href="https://kira000.hatenadiary.jp/">kira924ageの雑記帳</a></li>
        <li key="4">Hatena Blog2: <a href="https://kira924age.hatenadiary.com/">kira924age’s note</a></li>
      </ul>

      <h3>Programming Contest</h3>
      <ul>
        <li key="1">AtCoder: <a href="https://atcoder.jp/users/kira924age">kira924age</a></li>
        <li key="2">Codeforces: <a href="https://codeforces.com/profile/kira924age">kira924age</a></li>
      </ul>
    </Layout>
  )
}
