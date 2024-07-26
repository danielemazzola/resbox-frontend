import { Routes, Route } from 'react-router-dom'
import './assets/global_style.css'
import NotFound from './pages/not-found/NotFound'
import Home from './pages/home/Home'
import Layout from './layout/Layout'
import Contact_us from './pages/contact-us/Contact_us'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/contact-us' element={<Contact_us />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
