import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import { Form } from "../../components/form";
import { Comments } from "../../components/comments";

export default function Post({ post })
{
  const router = useRouter();
  if (!router.isFallback && !post?.slug)
  {
    return <ErrorPage statusCode={404} />
  }

  return(
    <div>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <PostHeader
                title={post.title}
                date={post.date}
                author={post.author}
              />
            <PostBody content={post.body} />
          </article>
          <Comments comments={post.comments} />
          <Form _id={post._id} />
        </>
      )}
    </div>
  );
}

export async function getStaticProps({ params, preview = false })
{
  const data = await getPostAndMorePosts(params.slug, preview);

  return{
    props:
    {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  };
}

export async function getStaticPaths()
{
  const allPosts = await getAllPostsWithSlug();

  return{
    paths:
      allPosts?.map((post) =>
        ({
          params:
          {
            slug: post.slug,
          },
        })
      ) || [],
    fallback: true,
  };
}
