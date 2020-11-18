import PostAll from "../components/post-all";
import { getAllPostsForHome } from "../lib/api";
import NavBar from "../components/navbar";

export default function Index({ everyPost })
{
  const allPosts = everyPost.slice(0)
  return(
    <>
      <NavBar />
      {allPosts.length > 0 && <PostAll posts={allPosts} />}
    </>
  );
}

export async function getStaticProps({ preview = false })
{
  const everyPost = await getAllPostsForHome(preview);
  return{
    props: { everyPost, preview },
  };
}
