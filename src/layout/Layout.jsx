import { Outlet } from 'react-router-dom'
import './layout.css'

const Layout = () => {
  return (
    <>
      <header></header>
      <main>{<Outlet />}</main>
      <footer></footer>
    </>
  )
}

export default Layout
