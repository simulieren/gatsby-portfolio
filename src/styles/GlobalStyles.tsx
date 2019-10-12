import { createGlobalStyle } from 'styled-components';

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

code, code[class*="language-"] {
  font-size: .7rem;
}

pre[class*="language-"]>code {
  box-shadow: none;
  border-left: none;
  border-radius: 4px;
}

pre[class*="language-"] {
  border-radius: 4px;
}

`;
