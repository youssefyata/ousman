import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Graphique(){
    const conceptImages = Array.from({ length: 23 }, (_, index) => index);
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
    return(<div>
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
        <div>
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
    </div>
   
);
}
export default Graphique;