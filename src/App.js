import './App.css';
import Navbar from './compontents/Navbar';
import Navbar2 from './compontents/Navbar2';
import Section1 from './compontents/Section1';
import Section2 from './compontents/Section2';
import Section3 from './compontents/Section3';
import Section4 from './compontents/Section4';
import Section5 from './compontents/Section5';
import Section6 from './compontents/Section6';
import Section7 from './compontents/Section7';
import Section8 from './compontents/Section8';
import Section9 from './compontents/Section9';
import { productsData } from './data/Section2';
function App() {
  console.log("this is productData",productsData);
  return (
    <div className="App">
      <div className="header">
        <Navbar/>
        <Navbar2/>
        <Section1/>
        <Section2 data={productsData}/>
        <Section3/>
        <Section4/> 
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
      </div>
  
    </div>
  );
}
export default App;
