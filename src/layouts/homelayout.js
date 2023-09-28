import Card from '../components/wishlist_card'; // Import the About component
import NavBar from '../components/navbar'; // Import the NavBar component
import Sidebar from '../components/sidebar'; // Import the Sidebar component
import Footer from '../components/footer'; // Import the Footer component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div className="home" >
     <NavBar />
     <div style={{ paddingTop : '80px'}}>
     <Row className="justify-content-md-center">
      <Col>
     <Sidebar />
     </Col>
     <Col>
     <Card />
     </Col>
     </Row>
     </div>
    </div>
  );
}

export default Home;