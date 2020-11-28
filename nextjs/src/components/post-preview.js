import Published from "./published";
import Link from "next/link";
import PostCategories from "./post-categories";

export default function PostPreview({
  title,
  date,
  excerpt,
  author,
  categories,
  slug,
})
{
  return(
    <div className="post-preview">
      <h2>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a>{title}</a>
        </Link>
      </h2>
      <div className="published">
        <Published name={author.name} picture={author.picture} dateString={date} />
      </div>
      <PostCategories categoryList={categories}/>
      <div className="post-body">
        <p>Hello everyone,</p>
        {excerpt}
      </div>
      <div id="show-more">
        <div id="show-more-trans"></div>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a>Show more...</a>
        </Link>
      </div>
    </div>
  );
}
