import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { correctChannel } from '../../redux/channel/actions';

function ModalForm({ item, onClose }) {
  const dispatch = useDispatch();
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  
  useEffect(() => {
    setLink(item.link);
    setTitle(item.title);
    
  }, [item]);
   
  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    dispatch(correctChannel(item.id, link, title ));
    onClose();
  };


  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Channel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="write title"
                autoFocus
                value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ControlTextarea1"
            >
              <Form.Label>Link</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="write link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;

ModalForm.propTypes = {
  item: PropTypes.object,
  onClose: PropTypes.func,

};