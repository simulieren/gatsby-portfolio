import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html * {
  box-sizing: border-box;
}

html {
  height: 100%;
  line-height: 1.5;
  font-size: 20px;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
p a {
  background: linear-gradient(
    to top,
    rgba(0, 0, 255, 0.2) 0.5em,
    transparent 0.5em
  );
}

p {
  text-indent: 2em;
}

p:first-of-type,
h1 + p,
h2 + p,
h3 + p,
h4 + p,
h5 + p,
h6 + p,
blockquote + p,
img + p,
figure + p,
hr + p {
  text-indent: 0;
}

img {
  width: 100%;
  display: block;
}

.post-content p {
  max-width: 30rem;
}

.post-content > *:first-child {
  margin-top: 0;
}

video {
  width: 100%;
}

pre {
  font-size: .75rem;
}

div > pre {
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 8px;
}

pre pre {
  border: none;

  & code {
    border: none;
  }
}

code {
  font-size: 1em;
  padding: .2em .4em;
}

div > code {
  border: 2px solid #eee;
  border-radius: 5px;

}

`;
