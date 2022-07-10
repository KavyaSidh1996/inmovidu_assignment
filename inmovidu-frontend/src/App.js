import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import MainContent from "./Components/MainContent/MainContent";
import Cards from "./Components/Cards/Cards";
import Clients from "./Components/Clients/Clients";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <h1>WHY CHOOSE US?</h1>
      <MainContent/>
      <h1>WE OFFER</h1>
      <Cards/>
      <h1>OUR CLENTS</h1>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
