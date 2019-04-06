import React from "react";
import LocalizedLink from "../LocalizedLink";

const isHash = (str: string) => /^#/.test(str);
const isInternal = (to: string) => /^\/(?!\/)/.test(to);

// Only use <LocalizedLink /> for internal links
const MdxLink = ({ href, ...props }: { href: string; props: any }) =>
  isHash(href) || !isInternal(href) ? (
    <a {...props} href={href} />
  ) : (
    <LocalizedLink {...props} to={href} />
  );

export default MdxLink;
