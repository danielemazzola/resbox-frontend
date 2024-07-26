import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '/images/logo.png'
import './Home.css'
import Partners from '../../components/partners/Partners'
import { PartnersContext } from '../../context/PartnersContext'

const Home = () => {
  const {
    state_partners: { partners },
    state_load: { load },
    getAllRestaurants
  } = useContext(PartnersContext)

  useEffect(() => {
    const fetchPartners = async () => {
      await getAllRestaurants()
    }
    fetchPartners()
  }, [getAllRestaurants])

  console.log(partners)

  return (
    <section className='container-hero'>
      <div className='contain-hero'>
        <div className='contain-log'>
          <img alt='logo Res-Box' src={logo} />
        </div>
        <div className='contain-description'>
          <div>
            <h1>
              <span className='name-app'>RES-BOX</span>
            </h1>
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
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#f5f5dc'
          fillOpacity='1'
          d='M0,224L80,234.7C160,245,320,267,480,250.7C640,235,800,181,960,154.7C1120,128,1280,128,1360,128L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
        ></path>
      </svg>
      <div className='container-partners'>
        <div className='contain-partners-title'>
          <h2>
            Donde puedes consumir tus <br></br>
            <span className='name-app'>BOXS</span>
          </h2>
        </div>
        {load ? (
          <p>Cargando...</p>
        ) : partners && partners.length > 0 ? (
          <div className='container-cards-partners'>
            {partners.map((partner) => (
              <div key={partner._id}>
                <Partners partner={partner} />
              </div>
            ))}
          </div>
        ) : (
          <p>No partners available</p>
        )}
      </div>
    </section>
  )
}

export default Home
