import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import Register from './layouts/registerlayout';
import Landing from './layouts/landinglayout';
import About from './layouts/aboutlayout';
import Home from './layouts/homelayout';
import Signin from './layouts/signinlayout';
import Wish from './layouts/wishlayout';
import SearchResults from './layouts/searchlayout.js'
import Product from './layouts/productlayout.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from "react-loading-skeleton";
import SwaggerViewer from './SwaggerViewer';

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import WebFontLoader from 'webfontloader';

WebFontLoader.load({
 google: {
   families: ['Material Icons'],
 },
});

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
        {/* <BrowserRouter> */}
          <Routes>
          <Route path="/signin" element={<Signin/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/wishlist" element={<Wish />}/>
            <Route path="/swagger" element={<SwaggerViewer />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/Product/:id" element={<Product />} />
          </Routes>
        {/* </BrowserRouter> */}
      </SkeletonTheme>

    </div>
  );
}

export default App;
