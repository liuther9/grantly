import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import WelcomePage from 'src/pagecomponents/Welcome'
import { useAppSelector } from 'store/hooks'

const Welcome: NextPage = () => {
  const userId = useAppSelector(state => state.userSlice.id)
  const router = useRouter()
  useEffect(() => {
    userId.length !== 0 && router.push('/')
  }, [router, userId.length])
  return (
    <WelcomePage />
	)
}

export default Welcome
