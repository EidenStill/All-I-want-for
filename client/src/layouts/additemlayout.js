import Add from "../components/add_wish"; // Import the About component
import NavBar from "../components/navbar"; // Import the NavBar component
import Sidebar from "../components/sidebar"; // Import the Sidebar component
// import Footer from "../components/footer"; // Import the Footer component
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <div className="">
      <NavBar />
      <div style={{ paddingTop: "61px" }}>
        <Row className="justify-content-md-center">
          <Row >
            <Col xs={1} className="mb-0" style={{ padding: '0', margin: '0' }} >
              <Sidebar />
            </Col>
            <Col xs={11}>
              <Add />
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
}

export default Home;
