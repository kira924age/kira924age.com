import React from "react";
import { HeroAvatar, HeroSocial, Section } from "astro-boilerplate-components";

const Hero: React.FC = () => (
  <Section>
    <HeroAvatar
      title={<>Hi there, I'm kira924age</>}
      description={
        <>
          Welcome! I'm a web developer who enjoys anime and manga. I earned my
          Bachelor of Engineering from The University of Electro-Communications
          in March 2023. Explore my site to discover more about my works and
          personal interests.
        </>
      }
      avatar={
        <img
          className="h-52 w-52 rounded-full object-cover m-4"
          src="/assets/images/profile.webp"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://twitter.com/kira924age"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center w-16 h-16">
              <HeroSocial
                src="/assets/images/twitter.webp"
                alt="twitter icon"
              />
            </div>
          </a>
          <a
            href="https://github.com/kira924age"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center w-16 h-16">
              <HeroSocial
                src="/assets/images/github-dark.svg"
                alt="GitHub icon"
              />
            </div>
          </a>
          <a
            href="https://atcoder.jp/users/kira924age"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center w-16 h-16">
              <HeroSocial src="/assets/images/atcoder.webp" alt="GitHub icon" />
            </div>
          </a>
          <a
            href="https://codeforces.com/profile/kira924age"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center w-16 h-16">
              <HeroSocial
                src="/assets/images/codeforces.webp"
                alt="Codeforces icon"
              />
            </div>
          </a>
          <a
            href="https://kira000.hatenadiary.jp"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center w-16 h-16">
              <HeroSocial
                src="/assets/images/hatenablog.webp"
                alt="Hatena blog icon"
              />
            </div>
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
