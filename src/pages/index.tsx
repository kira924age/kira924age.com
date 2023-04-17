import Head from "next/head";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { MdOutbound } from "react-icons/md";

import { Layout } from "../components/layout";
import styles from "../styles/Home.module.scss";
import utilStyles from "../styles/utils.module.css";
import twitter from "../../assets/images/twitter.png";
import github from "../../assets/images/github.svg";
import atcoder from "../../assets/images/atcoder.png";
import codeforces from "../../assets/images/codeforces.png";
import annict from "../../assets/images/annict.png";
import bookmeter from "../../assets/images/bookmeter.png";
import gamemo from "../../assets/images/GAMEMO.png";
import hatenablog from "../../assets/images/hatenablog.png";

type AccountItemProps = {
  name: string;
  href: string;
  alt: string;
  src: StaticImageData;
};

const AccountItem: React.FC<AccountItemProps> = ({ name, href, alt, src }) => {
  return (
    <div className={styles.accountItem}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={alt}
          width={60}
          height={60}
          style={{ borderRadius: "10%" }}
        />
      </a>
      <span>{name}</span>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <Layout home>
      <Head>
        <title>kira924age.com</title>
      </Head>

      <header className={styles.header}>
        <Image
          src="/images/profile.png"
          width={100}
          height={100}
          alt="kira924age"
          className={styles.iconImage}
        />
        <div className={utilStyles.headingXl}>kira924age</div>
        <p>anime otaku</p>
      </header>

      <h3>Profile</h3>
      <ul>
        <li>Handle: kira924age</li>
        <li>
          Hobby: Anime (Watching), Manga (Reading), Cycling, Basketball
          (Watching & Playing), Game (CTF, Competitive programming)
        </li>
        <li>Nationality: Japanese</li>
        <li>
          Educations: Bachelor of Engineering, The University of
          Electro-Communications (March 2023)
        </li>
      </ul>

      <h3>Products</h3>
      <ul>
        <li key="1">Codeforces Problems</li>
        <ul>
          <li key="1">
            URL:{" "}
            <a
              href="https://cf.kira924age.com/#/table/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              https://cf.kira924age.com/#/table/
              <MdOutbound size="1rem" />
            </a>
          </li>
          <li key="2">
            GitHub:{" "}
            <a
              href="https://github.com/kira924age/CodeforcesProblems"
              target="_blank"
              rel="noopenner noreferrer"
            >
              kira924age/CodeforcesProblems
              <MdOutbound size="1rem" />
            </a>
          </li>
          <li key="3">
            Article (Japanese):{" "}
            <a
              href="https://kira000.hatenadiary.jp/entry/2021/03/06/123556"
              target="_blank"
              rel="noopenner noreferrer"
            >
              AtCoder Problems のパクリアプリ CF Problems を作りました -
              kira924ageの雑記帳
              <MdOutbound size="1rem" />
            </a>
          </li>
        </ul>
      </ul>

      <h3>Favorites</h3>
      <ul>
        <li>
          <Link href="/anime">Anime</Link>
        </li>
        <li>
          <Link href="/manga">Manga</Link>
        </li>
        <li>
          <Link href="/novel">Novel</Link>
        </li>
        <li>
          <Link href="/song">Song</Link>
        </li>
      </ul>

      <h3>Accounts</h3>
      <div className={styles.container}>
        <AccountItem
          name="Twitter"
          href="https://twitter.com/kira924age/"
          alt="twitter.com/kira924age"
          src={twitter}
        />
        <AccountItem
          name="GitHub"
          alt="github.com/kira924age"
          href="https://github.com/kira924age/"
          src={github}
        />
        <AccountItem
          name="AtCoder"
          alt="atcoder.jp/users/kira924age"
          href="https://atcoder.jp/users/kira924age/"
          src={atcoder}
        />
        <AccountItem
          name="Codeforces"
          alt="codeforces.com/profile/kira924age"
          href="https://codeforces.com/profile/kira924age/"
          src={codeforces}
        />
        <AccountItem
          name="Annict"
          alt="annict.com/@kira924age"
          href="https://annict.com/@kira924age/"
          src={annict}
        />
        <AccountItem
          name="Bookmeter"
          alt="bookmeter.com/users/443819"
          href="https://bookmeter.com/users/443819/"
          src={bookmeter}
        />
        <AccountItem
          name="GAMEMO"
          alt="gamemo.app/@kira924age"
          href="https://gamemo.app/@kira924age/"
          src={gamemo}
        />
        <AccountItem
          name="Hatena Blog"
          alt="kira924ageの雑記帳"
          href="https://kira000.hatenadiary.jp/"
          src={hatenablog}
        />
      </div>

      <h3>Contact</h3>
      <p>
        Contact me at kira924age@gmail.com or{" "}
        <a
          href="https://twitter.com/kira924age"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        (recommend)
      </p>
    </Layout>
  );
};

export default Home;
