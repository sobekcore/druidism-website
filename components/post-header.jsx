import Published from "../components/published";
import PostTitle from "../components/post-title";
import PostCategories from "../components/post-categories";

export default function PostHeader({ title, date, author, categories })
{
  return(
    <>
      <PostTitle>{title}</PostTitle>
      <header>
        <div className="published">
          <Published name={author.name} picture={author.picture} dateString={date} />
        </div>
        <PostCategories categoryList={categories}/>
      </header>
    </>
  );
}
