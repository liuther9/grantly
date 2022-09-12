import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { Provider } from 'react-redux'
import DefaultLayout from 'src/layout/DefaultLayout'
import GlobalStyle from 'styles/global'
import { store } from 'store/index'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<GlobalStyle />
			<Provider store={store}>
				<DefaultLayout>
					<Component {...pageProps} />
				</DefaultLayout>
			</Provider>
		</Fragment>
	)
}

export default MyApp
