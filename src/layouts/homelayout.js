import Card from '../components/wishlist_card'; // Import the About component
import NavBar from '../components/landing_navbar'; // Import the NavBar component
import Footer from '../components/footer'; // Import the Footer component

function MainLayout() {
  return (
    <div className="App-header">
     <NavBar />
     <Card />
     <Footer/>
    </div>
  );
}

export default MainLayout;
