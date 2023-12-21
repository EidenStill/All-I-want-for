import Card from "../components/wishlist_card"; // Import the About component
import NavBar from "../components/navbar"; // Import the NavBar component
import Sidebar from "../components/sidebar"; // Import the Sidebar component
import Footer from "../components/footer"; // Import the Footer component
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Wish from "../components/wishlist";
function Home() {
  return (
    <div className="">
      <NavBar />
      <div style={{ paddingTop: "61px" }}>
        <Row className="justify-content-md-center">
          <Col>
            <Sidebar />
          </Col>

          <Col>
            <Wish />
          </Col>

        </Row>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
