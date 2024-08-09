import coffe from '/images/coffe.webp'
import box from '/images/caja.webp'
import tazaCafe from '/images/taza-cafe.webp'
import './HowDoesItWork.css'

const HowDoesItWork = ({ home_works }) => {
  return (
    <div className='container-how-work'>
      <div className='contain-log-work'>
        <div>
          <img alt='image coffe banner' src={coffe} />
        </div>
        <div className='contain-description-work'>
          <div className='contain-title-app-work'>
            <h2>
              <span className='name-app-work'>
                {home_works.how_work_title_1}
              </span>
            </h2>
            <p className=''>&quot;{home_works.how_work_subtitle_1}&quot;</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className='contain-log-work'>
        <div>
          <img alt='image coffe banner' src={box} />
        </div>
        <div className='contain-description-work'>
          <div className='contain-title-app-work'>
            <h2>
              <span className='name-app-work'>
                {home_works.how_work_title_2}
              </span>
            </h2>
            <p className=''>&quot;{home_works.how_work_subtitle_2}&quot;</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className='contain-log-work'>
        <div>
          <img alt='image coffe banner' src={tazaCafe} />
        </div>
        <div className='contain-description-work'>
          <div className='contain-title-app-work'>
            <h2>
              <span className='name-app-work'>
                {home_works.how_work_title_3}
              </span>
            </h2>
            <p className=''>&quot;{home_works.how_work_subtitle_3}&quot;</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default HowDoesItWork
