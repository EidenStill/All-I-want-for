import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Register from './layouts/registerlayout';
import Main from './layouts/mainlayout';
import About from './layouts/aboutlayout';
import {Routes, Route} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  
  // Create a loading skeleton for the Home page
  const loadingSkeleton = (
    <div className="loading-skeleton">
      <Skeleton height={30} width={300} />
      <Skeleton height={30} width={300} />
      <Skeleton height={30} width={300} />
      <Skeleton height={30} width={300} />
    </div>
  );
  
  return (//routes are displayed here
  <div className="App container-fluid d-flex flex-column">
    <SkeletonTheme baseColor="#D2D4DB" highlightColor="#F9FAFC">
    <Routes> 
        <Route path="/" element={<Register/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Main/>} />
    </Routes>
    </SkeletonTheme>
  </div>
  );
}

export default App;
