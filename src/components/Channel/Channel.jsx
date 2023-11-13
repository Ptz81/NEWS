import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Body, ButtonWrapper, InputWrapper, TaskWrapper, Title } from "./Channel.styled";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox.jsx";
import { Button } from "../UserMenu/UserMenu.styled";
import ModalForm from "./ChannelModal.jsx";
import { correctChannel, deleteChannel, toggleFavorites } from "../../redux/channel/actions";


export const Channel = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteChannel(item.id));
  const handleToggleFavorites = () => dispatch(toggleFavorites(item.id));

  const handleUpdate = (channelId, newTitle, newLink) => {
    setIsModalOpen(true);
    dispatch(correctChannel(channelId, newTitle, newLink));
  };

  return (
    <TaskWrapper>
      <CustomCheckbox onChange={handleToggleFavorites} checked={item.favorites} />
      <InputWrapper>
        <Title>{item.title}</Title>
        <Body>{item.link}</Body>
        
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={() => handleUpdate()}>Correct</Button>
        <Button onClick={handleDelete}>
          Delete
        </Button>
      </ButtonWrapper>

      {isModalOpen && (
        <ModalForm item={item}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </TaskWrapper>
  );
};

Channel.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string,
    favorites: PropTypes.bool,
  }).isRequired,
};