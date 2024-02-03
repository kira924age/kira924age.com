import React from "react";
import type { IFrontmatter } from "astro-boilerplate-components";
import { PostHeader, Section } from "astro-boilerplate-components";
import type { ReactNode } from "react";

import { AppConfig } from "@/utils/AppConfig";

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

type MyPostContentProps = {
  content: IFrontmatter;
  children: ReactNode;
};

const MyPostContent: React.FC<MyPostContentProps> = ({
  content,
  children,
}: MyPostContentProps) => (
  <div className="mx-auto mt-5 max-w-prose">
    {content.imgSrc && (
      <div className="aspect-w-4 aspect-h-1">
        <img
          className="h-full w-full rounded-lg object-cover object-center"
          src={content.imgSrc}
          alt={content.imgAlt}
          loading="lazy"
        />
      </div>
    )}
    <div className="prose prose-invert mt-8 prose-img:rounded-lg">
      {children}
    </div>
  </div>
);

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <MyPostContent content={props.frontmatter}>{props.children}</MyPostContent>
  </Section>
);

export { BlogPost };
