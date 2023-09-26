import About from '../components/about'; // Import the About component
import NavBar from '../components/navbar'; // Import the NavBar component
import Footer from '../components/footer'; // Import the Footer component

function MainLayout() {
  return (
    <div className="App">
     <NavBar />
     <About />
     
    </div>
  );
}

export default MainLayout;
