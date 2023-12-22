import { Container, Button, Card, Toast, Modal } from "react-bootstrap";
import styled from "styled-components";

import { FaBookmark } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import { fetchSaleById } from "../queryData";
import { Grid } from "@mui/material";
import { ClipLoader } from "react-spinners";

import axios from "axios";

const Title = styled.h2`
  font-weight: bold;
  color: #808080;
`;

const CoverImg = styled.img`
  width: 30%;
  height: 100%;
  padding: 20px;
  object-position: top center;
  margin: 10px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
  padding: 10px;
  border: 1px solid gray;
  background-color: transparent;
  color: black;

  &:hover,
  &:focus {
    background-color: #808080 !important;
    border: 1px solid #808080 !important;
    color: white !important;
  }

  &:active {
    background-color: #d06023 !important;
    border: 1px solid #d06023 !important;
    color: white !important;
  }
`;

const Text = styled.span`
  font-size: 18px;
`;
const EventLink = styled.a`
  text-decoration: none;
  color: #808080;

  &:hover {
    color: #d06023;
    text-decoration: underline;
  }
`;

const ConfirmButton = styled(Button)`
  width: 90px;
  border-radius: 45px;
  background-color: #808080;
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

const ProductDisplay = () => {
  const { id } = useParams();

  const [saleData, setSaleData] = useState([]);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const data = await fetchSaleById(id);
        console.log(data);
        console.log("in product display");
        setSaleData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchDataById();
  }, [id]);
  const [loading, setLoading] = useState(false);

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
      const response = await axios.post("http://localhost:8080/addevent/" + id);
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
  console.log(saleData);
  console.log(saleData.product);
  return (
    <div>
      {loading ? (
        <div
          className="spinner-container"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ClipLoader color="#333" loading={loading} size={50} />
        </div>
      ) : (
        <div>
          <div style={{ height: 400 }}>
            <CoverImg src={saleData.image} alt={saleData.product} />
          </div>
          <Container style={{ paddingLeft: 100, marginTop: 30 }}>
            <Grid container style={{ textAlign: 'left' }}>
              <Grid item xs={12} sm={9}>
                <Title ref={titleRef}>{saleData.product}</Title>
                <Text>{saleData.source} </Text> <Text> | </Text>
                <Text>{saleData.expiry}</Text> <br />
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}>
                  {saleData.original}
                </Text>
                <Text style={{ color: "#da7422" }}>             {saleData.discount}Off</Text>

                <br />
                <Text >  {saleData.price}</Text> <br />
                <br />
                <br />
                <p style={{ fontSize: "18px", textAlign: "justify" }}>
                  {saleData.description}
                </p>
                <br />
                <EventLink href={saleData.link}>
                  <Text>{saleData.link}</Text>
                </EventLink>
              </Grid>
              <Grid
                item
                xs={2}
                sm={2}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  padding: "10px",
                }}
              >
                <StyledButton onClick={handleConfirmation}>
                  <FaBookmark style={{ fontSize: "24px" }} />
                </StyledButton>{" "}
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
              position: "fixed",
              top: "15px",
              right: "13px",
              width: "200px", // Set the width as needed
              zIndex: 1,
            }}
          >
            <Toast.Body style={{ color: "white" }}>{message}</Toast.Body>
          </Toast>

          {/* Confirmation Modal */}
          <Modal
            show={showConfirmationModal}
            onHide={() => setShowConfirmationModal(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Action</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to add this product? <br />
              <Card.Title
                style={{ fontSize: 20, fontWeight: "bold", color: "#DA7422" }}
              >
                {saleData.title}
              </Card.Title>{" "}
              on <span>{saleData.date}</span>
              <span> | </span>
              <span>{saleData.time}</span> - <span>{saleData.city}</span> <br />
            </Modal.Body>
            <Modal.Footer>
              <CancelButton onClick={() => setShowConfirmationModal(false)}>
                Cancel
              </CancelButton>
              <ConfirmButton onClick={confirmModal}>Confirm</ConfirmButton>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
