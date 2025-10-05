import { useEffect } from "react";

const CanonicalTag = ({ url }) => {
  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [url]);

  return null; // nothing renders on the page
};

export default CanonicalTag;
