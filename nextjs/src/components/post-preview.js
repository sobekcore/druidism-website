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
    <div>
      <h3>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <div>
        <Date dateString={date} />
      </div>
      <Avatar name={author.name} picture={author.picture} />
      <p>
        {excerpt}
      </p>
    </div>
  );
}
