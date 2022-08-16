import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html, body {
		outline: 0;
		margin: 0;
		padding: 0;
		border: 0;
		width: 100vw;
		min-height: 100vh;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}
`
export default GlobalStyle