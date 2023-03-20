import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'dark')

  useEffect(() => {
    const className = 'light'
    const bodyClass = window.document.body.classList

    colorMode === 'light'
      ? bodyClass.add(className)
      : bodyClass.remove(className)
  }, [colorMode])

  return [colorMode, setColorMode]
}

export default useColorMode
