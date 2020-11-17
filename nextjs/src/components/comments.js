import { Fragment } from "react";
import Date from "./date";

export function Comments({ comments = [] })
{
  return(
    <Fragment>
      <h2>Comments:</h2>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id}>
            <hr/>
            <h4><a href={`mailto:${email}`}>{name}</a> (<Date
            dateString={_createdAt}/>)</h4>
            <p>{comment}</p>
            <hr/>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
