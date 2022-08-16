import { Fragment } from 'react'
import styled from 'styled-components'
import Header from './Header'

const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: calc(100vh - 64px);
`

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Fragment>
			<Header></Header>
			<Main>{children}</Main>
		</Fragment>
	)
}

export default Layout