import SearchResults from '../components/searchresult'; // Import the Search Results component
import NavBar from '../components/navbar'; // Import the NavBar component
import Sidebar from '../components/sidebar'; // Import the Sidebar component
import Footer from '../components/footer'; // Import the Footer component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchResults from '../components/searchresult';

function Home() {
  return (
    <div className="" >
     <NavBar />
     <div style={{ paddingTop : '61px'}}>
     <Row className="justify-content-md-center">
      <Col>
     <Sidebar />
     </Col>
     <Col>
     <SearchResults />
     </Col>
     </Row>
     </div>
    </div>
  );
}

export default Home;