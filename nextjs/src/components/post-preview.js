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
          <a id="post-preview-title">{title}</a>
        </Link>
      </h2>
      <div className="published">
        <Published name={author.name} picture={author.picture} dateString={date} />
      </div>
      <PostCategories categoryList={categories}/>
      <p className="post-body">
        {excerpt}
      </p>
    </div>
  );
}
