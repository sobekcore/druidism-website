export default function Avatar({ name, picture })
{
	return(
		<div>
			<img width={70} height={70} src={picture} alt={name}/>
			<div className="author-name">{name}</div>
		</div>
	);
}
