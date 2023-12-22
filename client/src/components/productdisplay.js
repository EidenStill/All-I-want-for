import { Container, Button, Card, Toast, Modal } from 'react-bootstrap';
import styled from 'styled-components';

import { BiCalendarPlus } from 'react-icons/bi';
import { useParams, useNavigate } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';
import { fetchEventById } from '../data';
import { Grid } from '@mui/material';

import axios from 'axios';

const Title = styled.h2`
  font-weight: bold;
  color: #da7422;
`;

const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
    padding: 10px;
    border: 1px solid gray;
    background-color: transparent;
    color: black;

    &:hover, &:focus {
        background-color: #da7422 !important;
        border: 1px solid #da7422 !important;
        color: white !important;
    }

    &:active {
        background-color: #D06023 !important;
        border: 1px solid #D06023 !important;
        color: white !important;
    }
`

const Text = styled.span`
    font-size: 18px;
`
const EventLink = styled.a`
  text-decoration: none;
  color: #DA7422;

  &:hover {
    color: #D06023;
    text-decoration: underline;
  }
`

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

const ProductDisplay  = () => {
  const {id} = useParams();

  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const data = await fetchEventById(id);
        setEventData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchDataById();
  }, [id]);

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
      const response = await axios.post("http://localhost:8080/addevent/" + id)
      setStatus(response.data.success)
      setMessage(response.data.message)
      toast()
    } catch (error) {
      console.error("Insert failed:", error.response.data.error);
    }

    setShowConfirmationModal(false);
  };

  const navigate = useNavigate();
  const handleConfirmation = async () => {
    try {
      const response = await axios.get("http://localhost:8080/")
      console.log(response)
      response.data.valid ? setShowConfirmationModal(true) : navigate("/login");
    } catch (error) {
      console.error(error.response.data.error);
    }
  }

  return (
    <div>
    {eventData ? (
      <div>
        <div style={{ height: 300 }}>
          <CoverImg src={eventData.img} alt="product" />
        </div>
        <Container style={{ marginTop: 30 }}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Title ref={titleRef}>{eventData.title}</Title>
              <Text>{eventData.date} </Text> <Text> | </Text>
              <Text>{eventData.time}</Text> <br />
              <Text>{eventData.city}</Text><br/>
              <Text>{eventData.address}</Text> <br />
              <Text style={{color: '#da7422'}}>{eventData.price}</Text><br/><br />
              <p style={{fontSize: '18px', textAlign: 'justify'}}>{eventData.description}</p><br/>
              <EventLink href={eventData.link}><Text>{eventData.link}</Text></EventLink>
            </Grid>
            <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', padding: '10px' }}>
              <StyledButton onClick={handleConfirmation}>
                <BiCalendarPlus style={{ fontSize: '24px' }} />
              </StyledButton>{' '}
            </Grid>
          </Grid>
        </Container>

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
            Are you sure you want to add this product? <br />
            <Card.Title style={{ fontSize: 20, fontWeight: 'bold', color: '#DA7422' }}>{eventData.title}</Card.Title> on <span>{eventData.date}</span><span> | </span>
            <span>{eventData.time}</span> - <span>{eventData.city}</span> <br />
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
      </div>
    ) : (
      <p>Loading...</p>
    )}
    </div>
  );
};

export default ProductDisplay;
