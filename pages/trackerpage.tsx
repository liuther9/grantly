import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Tracker from 'pagecomponents/Main/Tracker'

const TrackerPage: NextPage = () => {
	const router = useRouter()
  return (
    <Tracker />
	)
}

export default TrackerPage
