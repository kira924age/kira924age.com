import React from "react";
import type { MarkdownInstance } from "astro";
import type { IFrontmatter } from "astro-boilerplate-components";
import { BlogGallery, Section } from "astro-boilerplate-components";

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts: React.FC<IRecentPostsProps> = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>Recent Posts</div>
        <div className="text-sm">
          <a href="/posts/">View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
