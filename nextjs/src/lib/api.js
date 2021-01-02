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

export async function getAllPostsForHome(preview)
{
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(date desc, publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug, preview)
{
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(publishedAt desc)
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
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)
      {
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}

export async function getXAmountOfPosts(preview, firstPostID, lastPostID)
{
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc)
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
        }`
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post"] | order(publishedAt desc)
      {
        ${postFields}
        body,
      }[${firstPostID}...${lastPostID}]`
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}
