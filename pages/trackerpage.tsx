import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Tracker from 'pagecomponents/Tracker'
import WelcomePage from 'src/pagecomponents/Welcome'

const TrackerPage: NextPage = () => {
	const router = useRouter()
  return (
    <Tracker />
	)
}

export default TrackerPage
