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
			<DefaultLayout>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</DefaultLayout>
		</Fragment>
	)
}

export default MyApp
