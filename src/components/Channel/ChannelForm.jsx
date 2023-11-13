import { useDispatch } from "react-redux";
// import Form from 'react-bootstrap/Form';
import { Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { addChannel } from "../../redux/channel/actions";
import { StatusButton } from "../Filter/StatusFilter.styled";

export const ChannelForm = () => {
    const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.elements.title.value; 
    const link = form.elements.link.value; 

 const handleAddChannel = () => {
    toast.success('Task added successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

   if (title.trim() === '' || link.trim() === '') {
      toast.error('Please fill all fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    dispatch(addChannel(link, title));
    form.reset();
    handleAddChannel();
  };

  return (
<Container style={{borderRadius:"20px", boxShadow: "0px 0px 3px #890000", padding: "20px", marginBottom: "20px"}}>
     
     <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="write title"
                autoFocus
                name="title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ControlInput1"
            >
              <Form.Label>Link</Form.Label>
                  <Form.Control
                type="link"
                placeholder="write link"
                autoFocus
                name="link"
                  />
            </Form.Group>
              <StatusButton
                  style={{marginTop: "20px"}}
                  variant="primary"
                  type="submit">
                  Add channel
              </StatusButton>     
      </Form>
      
</Container>
                
  );
};