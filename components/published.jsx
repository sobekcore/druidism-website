import Date from "./date";

export default function Published({ name, picture, dateString })
{
  return(
    <section>
      <div>
        <a id="author-name">{name}</a> on <Date dateString={dateString}/>
      </div>
      <img id="author-image" src={picture} alt={name}/>
    </section>
  );
}
