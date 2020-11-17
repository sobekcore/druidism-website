import BlockContent from "@sanity/block-content-to-react";
import client from "../lib/sanity";

export default function PostBody({ content })
{
  return(
    <div>
      <BlockContent
        blocks={ content }
        imageOptions={{ fit: "max" }}
        {...client.config()}
      />
    </div>
  );
}
