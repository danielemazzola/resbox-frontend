import { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PartnersContext } from '../../context/PartnersContext'
import Partners from '../../components/partners_card/Partners'
import logo from '/images/logo.png'
import { home_works } from './helpers'
import './Home.css'
import Loader from '../../components/loader/Loader'
import HowDoesItWork from '../../components/howDoesItWork/HowDoesItWork'

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
    if (partners.length > 0) return
    else fetchPartners()
  }, [getAllRestaurants, partners])

  const refPartner = useRef(null)
  const refFunctionApp = useRef(null)
  const refPartnersSection = useRef(null)
  const refFunctionAppSection = useRef(null)

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <section className='container-hero'>
          <div className='contain-hero'>
            <div className='contain-log'>
              <img alt='logo Res-Box' src={logo} />
            </div>
            <div className='contain-description'>
              <div className='contain-title-app'>
                <h1>
                  <span className='name-app'>{home_works.title}</span>
                </h1>
                <p className=''>&quot;{home_works.subtitle}&quot;</p>
              </div>
              <div></div>
              <div className='contain-btn-action'>
                <Link to='./login'>
                  <button className='button'>
                    {home_works.btn_get_started}
                  </button>
                </Link>
                <Link to='./register'>
                  <button className='button  register'>
                    {home_works.btn_register}
                  </button>
                </Link>
                <button
                  ref={refPartner}
                  onClick={() => scrollToRef(refPartnersSection)}
                  className='button  green'
                >
                  {home_works.btn_partners}
                </button>
                <button
                  ref={refFunctionApp}
                  onClick={() => scrollToRef(refFunctionAppSection)}
                  className='button  register'
                >
                  {home_works.btn_function_app}
                </button>
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
          <div
            id='partners'
            ref={refPartnersSection}
            className='container-partners'
          >
            <div className='contain-partners-title'>
              <h2 className=''>
                {home_works.title_2} <br></br>
                <span className='name-app'>{home_works.title_2_span}</span>
              </h2>
            </div>
            <div className='container-country-partners'>
              <h3>Estamos en:</h3>
              <ul>
                {partners
                  .map((el) => el.country)
                  .filter((value, index, self) => self.indexOf(value) === index)
                  .map((country, index) => (
                    <li key={index}>{country}</li>
                  ))}
              </ul>
            </div>
            {partners && partners.length > 0 ? (
              <div className='container-cards-partners'>
                {partners
                  .map((partner) => (
                    <div key={partner._id}>
                      <Partners partner={partner} />
                    </div>
                  ))
                  .slice(0, 10)
                  .reverse()}
              </div>
            ) : (
              <p>{home_works.paragraph_not_partner}</p>
            )}
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#f5f5dc'
              fillOpacity='1'
              d='M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,213.3C672,235,768,245,864,250.7C960,256,1056,256,1152,256C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ></path>
          </svg>
          <div ref={refFunctionAppSection} className='contain-function'>
            <div>
              <h2>
                <span className='name-app'>¿Como funciona?</span>
              </h2>
            </div>
            <HowDoesItWork home_works={home_works} />
          </div>
        </section>
      )}
    </>
  )
}

export default Home
