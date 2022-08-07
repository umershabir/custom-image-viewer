import React from 'react'
import Modal from 'react-modal'

//
const customStyles = {
  content: {
    width: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#ECFCFB',
  },
}
const images = [
  'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
]
//
export default function App() {
  const [imgItem, setImgItem] = React.useState(0)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const recordLength = images.length - 1
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <span
        className='image-view d-flex justify-content-center align-items-center vh-100'
        onClick={openModal}
      >
        Viewe Images
      </span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex justify-content-end align-items-center'>
              <div className='d-flex'>
                <button
                  className='btn'
                  onClick={closeModal}
                  style={{ color: '#666666' }}
                >
                  <i className='fas fa-times'></i>
                </button>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='d-flex justify-content-between align-items-center'>
              <button
                className='btn'
                style={{ color: '#666666' }}
                onClick={() =>
                  setImgItem(imgItem === 0 ? imgItem : imgItem - 1)
                }
              >
                <i
                  className='fas fa-chevron-circle-left'
                  style={{ fontSize: 30 }}
                ></i>
              </button>
              <span>
                <img
                  src={images[imgItem]}
                  alt=''
                  style={{ width: '400px', height: '550px' }}
                  className='rounded'
                />
              </span>
              <button
                className='btn'
                style={{ color: '#666666' }}
                onClick={() =>
                  setImgItem(imgItem === recordLength ? imgItem : imgItem + 1)
                }
              >
                <i
                  className='fas fa-chevron-circle-right'
                  style={{ fontSize: 30 }}
                ></i>
              </button>
            </div>
          </div>
          <div className='col-12 mt-2'>
            <div
              className='d-flex justify-content-center'
              style={{ borderTop: '2px solid #CCCCCC' }}
            >
              {images.map((item, index) => (
                <img
                  onClick={() => setImgItem(index)}
                  key={index}
                  className={index === imgItem ? 'active-image' : ''}
                  src={item}
                  alt=''
                  style={{
                    width: '100px',
                    height: '125px',
                    margin: '5px',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>
      <style jsx='true'>
        {`
          .image-view {
            cursor: pointer;
          }
          .image-view:hover {
            text-decoration: underline;
          }
          .ReactModal__Overlay {
            opacity: 0;
            transition: opacity 300ms ease-in-out;
            background-color: rgba(0, 0, 0, 0.38) !important;
          }

          .ReactModal__Overlay--after-open {
            opacity: 1;
          }

          .ReactModal__Overlay--before-close {
            opacity: 0;
          }
          .ReactModal__Content.ReactModal__Content--after-open {
          }
          .active-image {
            border: 3px solid #009b94;
            border-radius: 5px;
          }
        `}
      </style>
    </>
  )
}
