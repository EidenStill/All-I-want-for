import Landing from '../components/landing'; // Import the Landing component
import LandingNavBar from '../components/landing_navbar'; // Import the NavBar component
import '../styles/App.css'

function MainLayout() {
  return (
    <div>
     <LandingNavBar />
     <Landing />
    </div>
  );
}

export default MainLayout;
