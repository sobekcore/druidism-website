import sanityClient from "@sanity/client";
import sanityImage from "@sanity/image-url";

const options =
{
  dataset: "production",
  projectId: "8ql5k0im",
  useCdn: process.env.NODE_ENV === "production",
}

const client = sanityClient(options);

export const previewClient = sanityClient(
  {
    ...options,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  }
);

export const imageBuilder = sanityImage(client);

export default client;
