import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Banner';
import Header from './Header';
import Phones from './Phones';
import Singleitem from './Singleitem';
import Footer from './Footer';
import Header2 from './Header2';







function App() {
  return (

    <div className="App ">

      

      <Routes>
        {/* <Route path="/" element={}></Route> */}
        <Route path="/" element={<><Header></Header><Banner></Banner> <Phones></Phones></>} ></Route>
        <Route path="/phone/:id" element={<><Header2></Header2><Singleitem /></>}></Route>


      </Routes>
<Footer></Footer>

    </div>
  );
}

export default App;
