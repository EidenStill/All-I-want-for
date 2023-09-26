import Home from '../components/home'; // Import the Home component
import NavBar from '../components/navbar'; // Import the NavBar component
import Footer from '../components/footer'; // Import the Footer component

function MainLayout() {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <Footer />
    </div>
  );
}

export default MainLayout;
