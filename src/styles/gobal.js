import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {

font-size: 10px;

--primary-light-500: #FC6464;
--primary-light-400: #FF9494;
--primary-light-300: #FFD1D1;
--primary-light-200: #FFF0EF;
--primary-light-100: #FBF9F9;
--primary-light-text: #ffffff;

--secondary-500: #112048;
--secondary-400: #32426B;
--secondary-300: #C7CFE2;
--secondary-text: #32426B;

--neutral-light-100: #F6F7F8;
--neutral-light-200: #F4F5F6;
--neutral-light-300: #CDCFD2;
--neutral-light-400: #B8BCC0;
--neutral-light-500: #575C61;
--neutral-light-600: #373737;
--neutral-light-background: #F6F7F8;

--neutral-dark-100: #212121;
--neutral-dark-200: #303336;
--neutral-dark-300: #43474C;
--neutral-dark-400: #6C737A;
--neutral-dark-500: #9EA2A8;
--neutral-dark-600: #F6F7F8;
--neutral-dark-background: #171717;

  }

  * {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2 {
    font-family: 'Cormorant Garamond', serif;
    color: var(--secondary-500);
  }

  h2 {
    font-size: 3.2rem;
    line-height: 4rem;
  }

  h3 {
    font-size: 1.8rem;
    font-family: 'Open Sans', sans-serif;
    line-height: 2.4rem;
    color: var(--secondary-500);
  }

  h4 {
    font-size: 1.4rem;
  font-weight: 600;
  color: var(--secondary-500);
  }

  a, li, button, p, span {
    font-family: 'Open Sans', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
  }
`
