import { useState } from 'react'
import PropTypes from 'prop-types'
import './Partners.css'
import Modal from '../modal/Modal'
import MapView from '../mapView/MapView'

const Partners = ({ partner }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className='partner-card'>
      <div className='partner-header'>
        <img
          onClick={handleOpenModal}
          className='partner-avatar'
          src={partner.avatar}
          alt={`${partner.restaurant_name} logo`}
          loading='lazy'
        />
        <span className='name-restaurant-span'>{partner.restaurant_name}</span>
      </div>

      <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
        <div className='modal-content'>
          <img
            className='modal-banner'
            src={partner.banner}
            alt={`${partner.restaurant_name} banner`}
          />
          <div className='logo-absolute'>
            <img
              className='partner-avatar'
              src={partner.avatar}
              alt={`${partner.restaurant_name} logo`}
              loading='lazy'
            />
          </div>
          <div className='modal-details'>
            <p>
              {' '}
              {partner.restaurant_name} | tel: {partner.phone}
            </p>
            <p>{partner.offices_address}</p>
            <p>{partner.country}</p>
            <div className='container-map-view'>
              <div>
                <MapView partner={partner} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

Partners.propTypes = {
  partner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    confirmed: PropTypes.bool.isRequired,
    country: PropTypes.string.isRequired,
    offices_address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    restaurant_name: PropTypes.string.isRequired,
    review: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired
}

export default Partners
