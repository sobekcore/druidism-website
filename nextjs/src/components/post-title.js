export default function PostTitle({ children })
{
  return(
    <h2>
    <a className="post-title">
      {children}
    </a>
    </h2>
  );
}
