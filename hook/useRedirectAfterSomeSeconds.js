import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function useRedirectAfterSomeSeconds(redirectTo, seconds = 10) {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds)
  const router = useRouter()

  useEffect(() => {
    if (secondsRemaining === 0) router.push('/mapPageSales')

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1)
      if (secondsRemaining === 1) router.push(redirectTo)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [router, secondsRemaining, redirectTo])

  return { secondsRemaining }
}
