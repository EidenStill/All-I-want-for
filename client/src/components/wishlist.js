import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Toast,
  Modal,
  Col,
  Row,
  Form,
  FormControl,
} from "react-bootstrap";

import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fetchsales } from '../queryData';
import axios from "axios";
import "../styles/card.css";

const EventContainer = styled.div`
position: fixed;
max-height: 700px; /* Set a maximum height for the scrollable div */
background-color: #f2f2f2;
width: 85%;
height: 100vh;
left: 15%; /*S


`;

const EventCard = styled(Card)`
  width: 16rem;
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
  max-width: 15vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`;

const EventLink = styled(Link)`
  text-decoration: none;
  color: #00008B;

  &:hover {
    color: #808080 
    ;
  }
`;

const ConfirmButton = styled(Button)`
  width: 90px;
  border-radius: 45px;
  background-color: #da7422;
  border: none;
  margin-right: 5px;

  &:hover {
    background-color: #d06023;
  }

  &:active {
    background-color: #d06023 !important;
  }
`;

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

  &:active,
  &:focus {
    background-color: #c3c9ce !important;
    color: gray !important;
  }
`;

function ItemCard({ item, onRemove }) {
  const [userData, setuserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const titleRef = useRef(null);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchsales();
        setuserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
}, [])

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



  const [searchInput, setSearchInput] = useState("");

  const [filteredResults, setFilteredResults] = useState([]);
    const searchItems = (searchValues) => {
      setLoading(true);
      setSearchInput(searchValues);
      const filteredData = userData.filter((item) => {
        const product = item.product.toLowerCase();
        return product.includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
     };



  return (
    <EventContainer>
      <Form
        className="justify-content-center"
        style={{ padding: "20px 70px 0px 20px", borderBottomColor: "black" }}
      >
        <Row>
          <Col xs="12">
            <div className="bar">
              <div>
                <h2 class="my-heading">My Wishlist</h2>
              </div>
              <div className="search-input">
                <FormControl
                  type="textitem"
                  placeholder="Search..."
                  className="mr-sm-2"
                  onChange={(e) => searchItems(e.target.value)}
                />
                <FontAwesomeIcon icon={faSearch} className="fa-search" />
              </div>
            </div>
          </Col>
        </Row>
      </Form>
      <div className="card-container scrollable">


      {loading ? (
            <div className="spinner-container" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <ClipLoader color="#333" loading={loading} size={50} />
    </div>
        ) : (
         <>
       {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <EventCard>
                  <EventImg
                    src={item.image}
                    alt={item.product}
                    className="card-img"
                  />
                  <Card.Body>
                    <EventLink to={`/Event/${item.id}`}>
                      <CardTitle ref={titleRef}>{item.product}</CardTitle>
                    </EventLink>
                    <Card.Text id="cardContent" style={{ fontSize: 16 }}>
                      <span>{item.source}</span>
                      <span> | </span>
                      <span>{item.expiry}</span> <br />
                      <span>Original Price</span> <br />
                      <span>Discounted Price</span> <br />
                                  <span onClick={() => setShowConfirmationModal(true)}   style={{ position: 'absolute', bottom: '10px', right: '16px',
            color: 'red', cursor: 'pointer'}}>Remove</span>
                    </Card.Text>
                  </Card.Body>
                </EventCard>
              );
            })
          : userData.map((item) => (
            
            <EventCard>
            <EventImg
              src={item.image}
              alt={item.product}
              className="card-img"
            />
            
            <Card.Body>
              <EventLink to={`/Event/${item.id}`}>
                <CardTitle ref={titleRef}>{item.product}</CardTitle>
              </EventLink>
              <Card.Text id="cardContent" style={{ fontSize: 14 }}>
              <span>{item.source}</span>
                      <span> | </span>
                      <span>{item.expiry}</span> <br />
                      <span placeholder="Original Price">Original Price = {item.original}</span> <br />
                      <span placeholder="Discounted Price">Discounted Price = {item.price}</span> <br />
                <span onClick={() => setShowConfirmationModal(true)}   style={{ position: 'absolute', bottom: '10px', right: '16px',
            color: 'red', cursor: 'pointer'}}>Remove</span>
              </Card.Text>
            </Card.Body>
          </EventCard>
            ))}
            </>
        )}
      </div>

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
          width: '200px', 
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
          {/* <Card.Title style={{ fontSize: 20, fontWeight: 'bold', color: '#DA7422'}}>{item.product}</Card.Title> on <span>{item.source}</span><span> | </span>
          <span>{item.expiry}</span> - <span>Original Price</span> <br /> */}
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

export default ItemCard;
