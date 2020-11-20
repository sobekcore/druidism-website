import Date from "./date";

export default function Published({ name, picture, dateString })
{
  return(
    <div>
      <div>
        <a id="author-name">{name}</a> on <Date dateString={dateString}/>
      </div>
      <img id="author-image" width={70} height={70} src={picture} alt={name}/>
    </div>
  );
}
