import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const SEO = ({ title, description, author }) => {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    author,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
    </>
  );
};

export default SEO;
