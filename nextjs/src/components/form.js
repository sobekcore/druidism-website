import { useState } from "react";
import { useForm } from "react-hook-form";

export function Form ({ _id })
{
  const [formData, setFormData] = useState();
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

  if(isSubmitting)
  {
    return(
      <div className="submition-box">
        <h2 className="comments-title">Comments:</h2>
        <h3 className="comment-submitting">Submitting comment…</h3>
      </div>
    );
  }

  if(hasSubmitted)
  {
    return(
      <div className="submition-box">
        <h2 className="comments-title">Comments:</h2>
        <h3 className="comment-submitting">Thanks for your comment!<br />
        It might take some time for post to show up...</h3>
      </div>
    );
  }

  return(
    <form id="form" onSubmit={handleSubmit(onSubmit)} disabled>
      <h2 className="comments-title">Comments:</h2>
      <input ref={register} type="hidden" name="_id" value={_id}/>
        <label>
          <div id="form-comment">
            <textarea maxLength={200} ref={register({required: true})}
            name="comment" rows="8" placeholder="Comment..."></textarea>
          </div>
        </label>
        <div id="form-second-row">
          <label>
            <div id="form-name">
              <input maxLength={16} name="name" ref={register({required: true})} placeholder="Name"/>
            </div>
          </label> <br />
          <label>
            <div id="form-email">
              <input name="email" type="email" ref={register({required: true})} placeholder="your@email.com"/>
            </div>
          </label> <br />
          <div id="form-submit">
            <input value="Submit" type="submit"/>
          </div>
        </div>
      {/* errors will return when field validation fails */}
      {errors.exampleRequired && <span>This field is required</span>}
    </form>
  );
}
