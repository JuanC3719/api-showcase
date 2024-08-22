import Navbar from "./components/navbar/Navbar";
import HeroBanner from "./components/hero/HeroBanner";
import HeroContainer from "./components/hero/HeroContainer";
import Footer from "./components/footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <HeroContainer />
      <Footer />
    </div>
  );
};

export default App;
