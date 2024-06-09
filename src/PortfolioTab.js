import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './PortfolioTap.css'; // Ensure you create and style this CSS file

function PortfolioTap() {
  const conceptRef = useRef(null);
  const conceptRef2 = useRef(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  Modal.setAppElement('#root'); 

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleClick = () => {
    if (conceptRef.current) {
      conceptRef.current.style.display = 'block';
      conceptRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick2 = () => {
    if (conceptRef2.current) {
      conceptRef2.current.style.display = 'block';
      conceptRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const conceptImages = Array.from({ length: 23 }, (_, index) => index);
  const conceptImages2 = Array.from({ length: 26 }, (_, index) => index);

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <img src='/images/covergraphicdesign.png' alt='Conception Graphique' style={{ cursor: "pointer" }} onClick={handleClick} />
        <div style={{ position: 'absolute', top: '75%', left: '25%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'left' }}>
          <h2 style={{ marginBottom: "-20px" }}>CONCEPTION GRAPHIQUE</h2>
          <p>Cette partie présente mon travail dans le domaine de <br />la conception graphique. Je vous remercie de votre intérêt.</p>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <img src='/images/coverphotographie.png' alt='Conception Graphique' style={{ cursor: "pointer" }} onClick={handleClick2} />
        <div style={{ position: 'absolute', top: '75%', left: '25%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'left' }}>
          <h2 style={{ marginBottom: "-20px" }}>PHOTOGRAPHIE</h2>
          <p>Cette partie présente mon travail dans le domaine de <br />la photographie. Je vous remercie de votre intérêt.</p>
        </div>
      </div>
      <div ref={conceptRef} className='concept' style={{  width: '100%' }}>
        <h1>CONCEPTION GRAPHIQUE</h1>
        {conceptImages.map((index) => (
          <img
            key={index}
            src={`/images/concept/${index}.jpg`}
            style={{ width: '300px', height: '200px', padding: '10px', cursor: 'pointer' }}
            alt={`Concept ${index}`}
            onClick={() => openModal(`/images/concept/${index}.jpg`)}
          />
        ))}
      </div>
      <div ref={conceptRef2} className='photo' style={{width: '100%' }}>
        <h1>PHOTOGRAPHIE</h1>
        {conceptImages2.map((index) => (
          <img
            key={index}
            src={`/images/photos/${index}.jpg`}
            style={{ width: '300px', height: '200px', padding: '10px', cursor: 'pointer' }}
            alt={`Concept ${index}`}
            onClick={() => openModal(`/images/photos/${index}.jpg`)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <div className="modal-header" >
          <button onClick={closeModal} className="close-button" >
            <FontAwesomeIcon icon={faTimes} style={{color:"#0000"}} />
          </button>
        </div>
        {selectedImage && <img src={selectedImage} alt="Selected" style={{ height:'600px' }} />}
      </Modal>
    </div>
  );
}

export default PortfolioTap;
