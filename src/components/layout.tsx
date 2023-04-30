import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";

type Properties = {
  children: React.ReactNode;
  home?: boolean;
};

export const Layout: React.FC<Properties> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content="kira924age Official Website" />

        <meta property="og:title" content="kira924age.com" />
        <meta property="og:site_name" content="kira924age.com" />
        <meta property="og:description" content="kira924age Official Website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kira924age.com" />
        <meta
          property="og:image"
          content="https://kira924age.com/images/ogp.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kira924age" />
      </Head>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
};
