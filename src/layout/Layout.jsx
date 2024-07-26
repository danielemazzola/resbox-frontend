import { Outlet, useLocation } from 'react-router-dom'
import './layout.css'
import useFadeIn from '../hooks/useFadeIn'

const Layout = () => {
  const location = useLocation()
  const { isVisible, shouldRender } = useFadeIn(location.pathname)

  return (
    <>
      <header></header>
      <main
        className={`fade-container ${
          shouldRender ? (isVisible ? 'fade-in' : 'fade-out') : 'hidden'
        }`}
      >
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default Layout
