import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import DefaultLayout from 'src/layout/DefaultLayout'
import GlobalStyle from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
    <GlobalStyle />
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  </Fragment>
}

export default MyApp
