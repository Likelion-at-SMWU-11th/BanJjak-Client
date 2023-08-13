import React from 'react';
import "../css/PostingModal.css"


function PostingModal({ setModalOpen}) {
 
  const closeModal = () => {
    setModalOpen(false);
};
     
      return (
        <div className="container">
          <button className="close" onClick={closeModal}>
                X
            </button>
            <p>모달창입니다.</p>
        </div>
      );
    }

export default PostingModal;