import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deletePost } from "../../redux/news/api";

export const Channel = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deletePost(items.id));
  const handleToggleFavorites = () => dispatch(toggleFavorites(items.id));

  const handleUpdate = (taskId, newTitle, newText) => {
    setIsModalOpen(true);
    dispatch(correctTask(taskId, newTitle, newText));
  };

  return (
    <TaskWrapper>
      <InputWrapper>
        <CustomDoneCheckbox className={css.checkbox} onChange={handleToggle} checked={task.completed} />
        <Title>{task.title}</Title>
        <Text>{task.text}</Text>
        <CustomCheckbox onChange={handleToggleFavorites} checked={task.favorites} />
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={() => handleUpdate()}>Correct</Button>
        <Button className="ms-2" onClick={handleDelete}>
          Delete
        </Button>
      </ButtonWrapper>

      {isModalOpen && (
        <ModalForm task={task} onClose={() => setIsModalOpen(false)} onUpdate={handleUpdate} />
      )}
    </TaskWrapper>
  );
};

Channel.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    completed: PropTypes.bool,
    favorites: PropTypes.bool,
  }).isRequired,
};