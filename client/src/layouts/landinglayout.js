import Landing from '../components/landing'; // Import the Landing component
import NavBar from '../components/navbar'; // Import the NavBar component
import '../styles/App.css'

function MainLayout() {
  return (
    <div>
     <NavBar />
     <Landing />
    </div>
  );
}

export default MainLayout;
