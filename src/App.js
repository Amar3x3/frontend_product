import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './components/HomePage'
import Aboutus from './components/Aboutus';
import Products from './components/Products';
import Career from './components/Career';
import Clients from './components/Clients';
import Contactus from './components/Contactus';
import FooterPage from './components/Footerpage';
import Navbar from './components/Navbar';


function App() {
  return (
  <>
  <BrowserRouter>
  <div className='App'>
  {/* <Sidebar/> */}
  <Navbar/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/AboutUs' element={<Aboutus/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/Clients' element={<Clients/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
    </Routes>
    <FooterPage></FooterPage>
    </div>
  </BrowserRouter>
    
  </>
  );
}

export default App;
