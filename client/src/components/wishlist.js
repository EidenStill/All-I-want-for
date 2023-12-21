import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Toast,
  Modal,
  Col,
  Row,
  FormControl,
} from "react-bootstrap";
import  Form from "react-bootstrap/form"
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaBookmark } from "react-icons/fa";
import userData from "../staticdata.json";
import axios from "axios";
//import userData from '../data/user_data';
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
`;

const CardButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: white;
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  color: black;

  &:hover,
  &:focus {
    background-color: #da7422;
    color: white !important;
  }

  &:active {
    background-color: #d06023 !important;
    color: white !important;
  }
`;

const StyledBookmark = styled(FaBookmark)`
  font-size: 24px;
`;

const CardSection = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: auto;
  z-index: 1;
  margin-top: -25px;
  margin-bottom: -20px;
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

function ItemCard(item) {
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
      const response = await axios.post(
        "http://localhost:8080/addevent/" + item.id
      );
      setStatus(response.data.success);
      setMessage(response.data.message);
      toast();
    } catch (error) {
      console.error("Insert failed:", error.response.data.error);
    }

    setShowConfirmationModal(false);
  };

  const navigate = useNavigate();
  const handleConfirmation = async () => {
    try {
      const response = await axios.get("http://localhost:8080/");
      console.log(response);
      response.data.valid ? setShowConfirmationModal(true) : navigate("/login");
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchItems = (searchValues) => {
    setSearchInput(searchValues);
    const filteredData = userData.filter((item) => {
      // Access the "product" field of the current item and convert it to lowercase
      const product = item.product.toLowerCase();

      // Check if the product contains the lowercase search input
      return product.includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
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
                <h2 class="my-heading">Wishlist</h2>
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
      <div className="card-container">
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <EventCard>
                  <EventImg
                    src={item.image}
                    alt={item.product}
                    className="card-img"
                  />
                  <CardSection>
                    <CardButton onClick={handleConfirmation}>
                      <StyledBookmark />
                    </CardButton>
                  </CardSection>
                  <Card.Body>
                    <EventLink to={`/Event/${item.id}`}>
                      <CardTitle ref={titleRef}>{item.product}</CardTitle>
                    </EventLink>
                    <Card.Text id="cardContent" style={{ fontSize: 16 }}>
                      <span>{item.source}</span>
                      <span> | </span>
                      <span>{item.expiry}</span> <br />
                      <span>{item.city}</span> <br />
                      
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
            <CardSection>
              <CardButton onClick={handleConfirmation}>
                <StyledBookmark />
              </CardButton>
            </CardSection>
            <Card.Body>
              <EventLink to={`/Event/${item.id}`}>
                <CardTitle ref={titleRef}>{item.product}</CardTitle>
              </EventLink>
              <Card.Text id="cardContent" style={{ fontSize: 16 }}>
                <span>{item.source}</span>
                <span> | </span>
                <span>{item.expiry}</span> <br />
                <span>{item.city}</span> <br />
                
              </Card.Text>
            </Card.Body>
          </EventCard>
            ))}
      </div>
    </EventContainer>
  );
}

export default ItemCard;
