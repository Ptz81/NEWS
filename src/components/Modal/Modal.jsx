import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { CloseButton, ModalBtnWrapper, ModalContent, ModalOverlay } from "./Modal.styled";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { correctChannel } from "../../redux/channel/actions";
import { InputComponent, InputWrapper } from "../Channel/Channel.styled";
import { Button } from "../UserMenu/UserMenu.styled";

const ModalForm = ({
  item, onClose
}) => {
  const dispatch = useDispatch();
   const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

    useEffect(() => {
    setLink(item.link);
    setTitle(item.title);
    
  }, [item]);

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    dispatch(correctChannel(item.id, link, title ));
    onClose();
  };

   const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <>
 
        <ModalOverlay onClick={handleBackdropClick}>
          <ModalContent className="ModalContent" onClick={handleModalClick} onKeyDown={handleKeyDown} tabIndex={-1}>
            <CloseButton onClick={handleClose}>
              <FaTimes size={18} />
            </CloseButton>
            <InputWrapper>
              <label htmlFor="title">Title:</label>
              <InputComponent
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="link">Link:</label>
              <InputComponent
                type="text"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
          </InputWrapper>
          <ModalBtnWrapper>
            <Button onClick={handleSave}>Save Changes</Button>
            <Button onClick={handleClose}>Close</Button>
          </ModalBtnWrapper>
            
          </ModalContent>
        </ModalOverlay>

    </>
  );
};

ModalForm.propTypes = {
  isOpen: PropTypes.bool,
   item: PropTypes.object,
  onClose: PropTypes.func,
};

export default ModalForm;
