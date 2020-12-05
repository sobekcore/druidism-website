import { Fragment } from "react";
import Date from "./date";

export function Comments({ comments = [] })
{
  return(
    <Fragment>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <div id="comment-box" key={_id}>
            <span>
              <a id="comment-name">{name}</a>
              <h4 id="date"><Date dateString={_createdAt}/></h4>
            </span>
            <p>{comment}</p>
          </div>
        ))}
      </ul>
    </Fragment>
  );
}
