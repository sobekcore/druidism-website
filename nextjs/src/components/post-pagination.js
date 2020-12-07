import { useState, useEffect } from "react";
import Pagination from "react-sanity-pagination";
import PostPreview from "./post-preview";
import client from "../lib/sanity";
import { useRouter } from "next/router";
import { postFields, getUniquePosts } from "../lib/api";

const postsToSend = [];

export default function PostPagination()
{
  const router = useRouter();
  const postsPerPage = 2;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc)
        {
          ${postFields}
          body,
        }`)
      .then(data => {
        postsToSend.push(...data);
        router.push("/blog");
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const action = (page, range, posts) =>
  {
    setPosts(posts);
  };

  if(postsToSend.length >= 1)
  {
    return(
      <div>
        {posts.map((post) => {
          return(
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              author={post.author}
              categories={post.categories}
              slug={post.slug}
            />
          );
        })}
        <div id="pagination">
          <Pagination
            items={getUniquePosts(postsToSend)}
            action={action}
            postsPerPage={postsPerPage}
          />
        </div>
      </div>
    );
  }
  else
  {
    return(
      <div className="post">
        <div id="loading">
          Loading...
        </div>
      </div>
    );
  }
}
