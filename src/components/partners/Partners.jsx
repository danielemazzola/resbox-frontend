import PropTypes from 'prop-types'
import './Partners.css'
import { useState } from 'react'

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
      </div>

      {/* Modal overlay with transition */}
      <div className={`modal-overlay ${isModalOpen ? 'open' : 'closed'}`}>
        <div className='modal-content'>
          <button className='modal-close' onClick={handleCloseModal}>
            ✕
          </button>
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
              <strong>Nombre:</strong> {partner.restaurant_name}
            </p>
            <p>
              <strong>Dirección:</strong> {partner.offices_address}
            </p>
            <p>
              <strong>Ciudad:</strong> {partner.country}
            </p>
            <p>
              <strong>Telefono:</strong> {partner.phone}
            </p>
            <p>
              <strong>Rating:</strong> {partner.rating} ({partner.ratingCount}{' '}
              reviews)
            </p>
          </div>
        </div>
      </div>
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
