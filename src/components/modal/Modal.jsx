import './Modal.css'
const Modal = ({ isModalOpen, handleCloseModal, children }) => {
  return (
    <div className={`filter modal-overlay ${isModalOpen ? 'open' : 'closed'}`}>
      <button className='modal-close' onClick={handleCloseModal}>
        ✕
      </button>
      {children}
    </div>
  )
}

export default Modal
