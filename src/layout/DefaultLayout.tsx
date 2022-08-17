import { Fragment } from 'react'
import styled from 'styled-components'
import Header from './Header'

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
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