import { useState } from "react";
import { useForm } from "react-hook-form";

export function Form ({ _id })
{
  const [setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data =>
  {
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try
    {
      response = await fetch('/api/createComment',
        {
          method: 'POST',
          body: JSON.stringify(data),
          type: 'application/json'
        }
      );
      setIsSubmitting(false);
      setHasSubmitted(true);
    }
    catch(err)
    {
      setFormData(err);
    }
  }

  if (isSubmitting)
  {
    return <h3 className="comment-submitting">Submitting comment…</h3>
  }

  if (hasSubmitted)
  {
    return(
      <>
        <h3 className="comment-submitting">Thanks for your comment!<br />
        It might take some time for post to show up...</h3>
      </>
    );
  }

  return(
    <form id="form" onSubmit={handleSubmit(onSubmit)} disabled>
      <input ref={register} type="hidden" name="_id" value={_id}/>
        <label>
          <div id="form-name">
            <span>Name</span> <br />
            <input name="name" ref={register({required: true})} placeholder="Your Name"/>
          </div>
        </label> <br />
        <label>
          <div id="form-email">
            <span>Email</span> <br />
            <input name="email" type="email" ref={register({required: true})} placeholder="your@email.com"/>
          </div>
        </label> <br />
        <div id="form-submit">
          <input value="Submit" type="submit"/> your comment.
        </div>
        <label>
          <div id="form-comment">
            <span>Comment</span> <br />
            <textarea ref={register({required: true})} name="comment" rows="8" placeholder="Place for your comment."></textarea>
          </div>
        </label>
      {/* errors will return when field validation fails */}
      {errors.exampleRequired && <span>This field is required</span>}
    </form>
  );
}
