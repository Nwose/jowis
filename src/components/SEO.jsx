const SITE_URL = "https://www.jowistudio.com";
const DEFAULT_IMAGE = `${SITE_URL}/assets/og-image.png`;

// React 19 hoists <title>/<meta>/<link> rendered anywhere in the tree into <head>.
const SEO = ({ title, description, path = "/", image = DEFAULT_IMAGE }) => {
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jowis Studio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default SEO;
