import './App.css';
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <>

  <Navbar/>
  <Home />
  <Footer />

{/* <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home  />} />    
          <Route path='/About' element={<About  />} />    
          <Route path='/Features' element={<Features />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </BrowserRouter> */}

    </>
  );
}

export default App;
