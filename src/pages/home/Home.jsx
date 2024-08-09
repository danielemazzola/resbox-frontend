import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PartnersContext } from '../../context/PartnersContext'
import Partners from '../../components/partners_card/Partners'
import logo from '/images/logo.png'
import { home_works } from './helpers'
import './Home.css'
import Loader from '../../components/loader/Loader'

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
                <p className='cursive'>&quot;{home_works.subtitle}&quot;</p>
              </div>
              <div></div>
              <div className='contain-btn-action'>
                <Link to='./login'>
                  <button className='button cursive'>
                    {home_works.btn_get_started}
                  </button>
                </Link>
                <Link to='./register' className='button cursive register'>
                  {home_works.btn_register}
                </Link>
                <a href='#partners' className='button cursive green'>
                  {home_works.btn_partners}
                </a>
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
          <div id='partners' className='container-partners'>
            <div className='contain-partners-title'>
              <h2 className='cursive'>
                {home_works.title_2} <br></br>
                <span className='name-app cursive-none'>
                  {home_works.title_2_span}
                </span>
              </h2>
            </div>
            {partners && partners.length > 0 ? (
              <div className='container-cards-partners'>
                {partners.map((partner) => (
                  <div key={partner._id}>
                    <Partners partner={partner} />
                  </div>
                ))}
              </div>
            ) : (
              <p>{home_works.paragraph_not_partner}</p>
            )}
          </div>
        </section>
      )}
    </>
  )
}

export default Home
