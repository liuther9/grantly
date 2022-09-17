import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { useUser } from 'src/utils/useUser'
import styled from 'styled-components'
import { _TABLET } from 'styles/variables'
import Header from './Header'

const Main = styled.main<{ showHeader: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100vw;
	height: ${p => p.showHeader ? 'calc(100vh - 64px)' : '100vh'};
	@media (max-width: ${_TABLET}) {
		height: calc(100vh - 64px);
	}
`

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const router = useRouter()
	const showHeader = router.route !== '/welcome'
	const [user, logout] = useUser()
	return (
		<Fragment>
			<Header showHeader={showHeader}></Header>
			<Main showHeader={showHeader}>{children}</Main>
		</Fragment>
	)
}

export default Layout