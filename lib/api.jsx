import client, { previewClient } from "./sanity";

export const getUniquePosts = (posts) =>
{
  const slugs = new Set();
  return posts.filter((post) =>
    {
      if(slugs.has(post.slug))
      {
        return false;
      }
      else
      {
        slugs.add(post.slug);
        return true;
      }
    }
  );
}

export const postFields =
`
  _id,
  name,
  title,
  "date": publishedAt,
  excerpt,
  "author": author->{name, "picture": image.asset->url},
  "categories": categories[]->title,
  "slug": slug.current,
`

const getClient = (preview) => (preview ? previewClient : client);

export async function getAllPostsWithSlug()
{
  const data = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  return data;
}

export async function getBlogPost(slug)
{
  const curClient = getClient();
  const [post] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug]
        {
          ${postFields}
          body,
          'comments': *[_type == "comment" && references(^._id) && approved == true] | order(_createdAt desc)
          {
            _id,
            name,
            email,
            comment,
            _createdAt
          }
        }`,
        { slug }
      )
    .then((res) => res?.[0])
  ]);
  return { post };
}
