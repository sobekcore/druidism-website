import { Fragment } from "react";
import Date from "./date";

export function Comments({ comments = [] })
{
  return(
    <Fragment>
      <h2 id="comments-title">Comments:</h2>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <div id="comment-box" key={_id}>
            <h4><a id="comment-name">{name}</a> - (<Date
            dateString={_createdAt}/>)</h4>
            <p>{comment}</p>
          </div>
        ))}
      </ul>
    </Fragment>
  );
}
