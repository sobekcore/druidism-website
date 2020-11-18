import Avatar from "./avatar";
import Date from "./date";
import Link from "next/link";

export default function PostPreview({
  title,
  date,
  excerpt,
  author,
  slug,
})
{
  return(
    <div class="post">
      <h2>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className="post-preview-title">{title}</a>
        </Link>
      </h2>
      <div className="post-date">
        <Date dateString={date} />
      </div>
      <Avatar name={author.name} picture={author.picture} />
      <p className="post-body">
        {excerpt}
      </p>
    </div>
  );
}
