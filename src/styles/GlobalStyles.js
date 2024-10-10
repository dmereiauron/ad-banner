import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Asket', sans-serif;
    background-color: #fff;
  }

	h1 {
		font-size: 50px;
		color: black;
	}

`
