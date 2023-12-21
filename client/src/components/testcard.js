
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Toast, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import userData from '../staticdata.json';


const EventContainer = styled.div`
  margin: 10px;
  position: relative; /* Ensure relative positioning for absolute elements */
`;

const EventCard = styled(Card)`
  width: 18rem;
  height: 310px;
  position: relative; /* Ensure relative positioning for absolute elements */
`;

const EventImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardTitle = styled(Card.Title)`
  font-size: 20px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Set maximum number of lines to 2 */
  -webkit-line-clamp: 2;
  /* Ensure the ellipsis shows up properly */
  -webkit-box-decoration-break: clone;
  /* Optional: Adjust the line height for better appearance */
  line-height: 1.4;
`;

const EventLink = styled(Link)`
  text-decoration: none;
  color: #DA7422;

  &:hover {
    color: #D06023;
  }
`;

const ConfirmButton = styled(Button)`
  width: 90px;
  border-radius: 45px;
  background-color: #DA7422;
  border: none;
  margin-right: 5px;

  &:hover {
    background-color: #D06023;
  }

  &:active {
    background-color: #D06023 !important;
  }
`

const CancelButton = styled(Button)`
  width: 90px;
  border-radius: 45px;
  background-color: #ced4da;
  color: gray;
  border: none;

  &:hover {
    background-color: #c3c9ce;
    color: gray;
  }

  &:active, &:focus {
    background-color: #c3c9ce !important;
    color: gray !important;
  }
`

const Event = ({ item, onRemove }) => {
  const titleRef = useRef(null);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const toast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const confirmModal = async () => {
    try {
      console.log(item.id)
      const response = await axios.delete("http://localhost:8080/removeevent/"+item.id)
      setStatus(response.data.success)
      setMessage(response.data.message)
      toast()
      if (response.data.success) {
        onRemove(item.id);
      }
    } catch (error) {
      console.error("Remove failed:", error.response.data.error);
    }

    setShowConfirmationModal(false);
  };

  return (
    <EventContainer>
      <EventCard>
        <EventImg src={item.img} id='cardImg' alt='Event' />
        <Card.Body>
          <EventLink to={`/Event/${item.id}`}>
            <CardTitle ref={titleRef}>{item.product}</CardTitle>
          </EventLink>
          <Card.Text id='cardContent' style={{ fontSize: 16 }}>
            <span>{item.date}</span><span> | </span>
            <span>{item.time}</span> <br />
            <span>{item.city}</span> <br />
            <span onClick={() => setShowConfirmationModal(true)}   style={{ position: 'absolute', bottom: '10px', right: '16px',
            color: 'red', cursor: 'pointer'}}>Remove</span>
          </Card.Text>
        </Card.Body>
      </EventCard>

      {/* Floating Toast */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        bg={status ? "success" : "danger"}
        style={{
          position: 'fixed',
          top: '15px',
          right: '13px',
          width: '200px', // Set the width as needed
          zIndex: 1,
        }}
      >
        <Toast.Body style={{ color: 'white' }}>{message}</Toast.Body>
      </Toast>

      {/* Confirmation Modal */}
      <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)} centered >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this event? <br/>
          <Card.Title style={{ fontSize: 20, fontWeight: 'bold', color: '#DA7422'}}>{item.title}</Card.Title> on <span>{item.date}</span><span> | </span>
          <span>{item.time}</span> - <span>{item.city}</span> <br />
        </Modal.Body>
        <Modal.Footer>
          <CancelButton onClick={() => setShowConfirmationModal(false)}>
            Cancel
          </CancelButton>
          <ConfirmButton onClick={confirmModal}>
            Confirm
          </ConfirmButton>
        </Modal.Footer>
      </Modal>
    </EventContainer>
  );
};

export default Event;