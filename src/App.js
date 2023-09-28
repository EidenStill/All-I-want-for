import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Register from './layouts/registerlayout';
import Landing from './layouts/landinglayout';
import About from './layouts/aboutlayout';
import Home from './layouts/homelayout';
import {Routes, Route} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  
  // Create a loading skeleton for the Landing page
  const loadingSkeleton = (
    <div className="loading-skeleton">
      <Skeleton height={30} width={300} />
      <Skeleton height={30} width={300} />
      <Skeleton height={30} width={300} />
      <Skeleton height={30} width={300} />
    </div>
  );
  
  return (//routes are displayed here
  <div className="App d-flex flex-column">
    <SkeletonTheme baseColor="#D2D4DB" highlightColor="#F9FAFC">
    <Routes> 
        <Route path="/register" element={<Register/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
    </Routes>
    </SkeletonTheme>
  </div>
  );
}

export default App;
