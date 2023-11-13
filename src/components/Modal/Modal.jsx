import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { CloseButton, ModalContent, ModalOverlay } from "./Modal.styled";


const ModalForm = ({ isOpen, closeModal, children}) => {
  
  const handleModalClick = (event) => {
    event.stopPropagation();
  };
   const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      {isOpen && (
        <ModalOverlay onUpdate={handleBackdropClick}>
          <ModalContent className="ModalContent" onUpdate={handleModalClick}>
            <CloseButton onClose={closeModal}>
              <FaTimes size={18} />
            </CloseButton>
                      {children}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

ModalForm.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalForm;