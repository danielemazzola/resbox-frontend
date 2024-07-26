import { useState, useEffect } from 'react'

const useFadeIn = (trigger, delay = 500) => {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    setShouldRender(true)
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => {
      clearTimeout(fadeInTimer)
      setIsVisible(false)
    }
  }, [trigger, delay])

  return { isVisible, shouldRender }
}

export default useFadeIn
