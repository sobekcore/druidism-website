import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import { Form } from "../../components/form";
import { Comments } from "../../components/comments";
import NavBar from "../../components/navbar";
import Title from "../../components/title";
import Footer from "../../components/footer";

export default function Post({ post })
{
  const router = useRouter();
  if (!router.isFallback && !post?.slug)
  {
    return <ErrorPage statusCode={404} />
  }

  return(
    <div id="post-page">
      <div className="background">
        <Title />
        <NavBar />
        <div className="post">
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                    title={post.title}
                    date={post.date}
                    author={post.author}
                    categories={post.categories}
                />
                <PostBody content={post.body} />
              </article>
              <Form _id={post._id} />
              <Comments comments={post.comments} />
            </>
          )}
        </div>
        <Footer />
      </div>
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
