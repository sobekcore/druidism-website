import PostPreview from "./post-preview";

export default function PostAll({ posts })
{
	return(
		<section>
			<div>
				{posts.map((post) => (
					<PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
