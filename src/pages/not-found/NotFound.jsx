import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <>
      <div className='not-found'>
        <p>Not Found</p>
      </div>
      <div className='turn'>
        <Link to='../' className='button '>
          Go home
        </Link>
      </div>
    </>
  )
}

export default NotFound
