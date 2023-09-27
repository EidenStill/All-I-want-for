import Card from '../components/wishlist_card'; // Import the About component
import NavBar from '../components/navbar'; // Import the NavBar component
import Sidebar from '../components/sidebar'; // Import the Sidebar component
import Footer from '../components/footer'; // Import the Footer component

function Home() {
  return (
    <div className="home" style={{ paddingTop : '80px'}}>
     <NavBar />
     <Sidebar />
     <Card />
    </div>
  );
}

export default Home;