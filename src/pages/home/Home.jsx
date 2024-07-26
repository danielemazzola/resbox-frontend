import { Link } from 'react-router-dom'
import logo from '/images/logo.png'
import './Home.css'
import Partners from '../../components/partners/Partners'
const Home = () => {
  return (
    <section className='container-hero'>
      <div className='contain-hero'>
        <div className='contain-log'>
          <img alt='logo Res-Box' src={logo} />
        </div>
        <div className='contain-description'>
          <div>
            <h1>RES-BOX</h1>
          </div>
          <div>
            <p>Todas las ofertas en un unico lugar.</p>
          </div>
          <div className='contain-btn-action'>
            <button className='button'>
              <Link to='./login'>Get Started</Link>
            </button>
            <Link to='./register' className='button register'>
              Register
            </Link>
          </div>
        </div>
      </div>
      <Partners />
    </section>
  )
}

export default Home
