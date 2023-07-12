import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header/Header';
import Section from './components/section-1/Section';
import Section1 from './components/section-2/Section';
import Section2 from './components/section-3/Section';
import Section3 from './components/section-4/Section';
import Footer from './components/footer/Footer';
import Footers from './components/footer-1.js/Footer';
function App() {
  return (
    <>
    <Header/>
    <Section/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Footer/>
    <Footers/>
    </>
    
  );
}

export default App;
