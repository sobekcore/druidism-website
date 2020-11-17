import Avatar from "../components/avatar";
import Date from "../components/date";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, date, author })
{
  return(
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div>
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
