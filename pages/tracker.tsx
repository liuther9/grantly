import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import WelcomePage from 'src/pagecomponents/Welcome'

const Welcome: NextPage = () => {
	const router = useRouter()
  return (
    <WelcomePage />
	)
}

export default Welcome
