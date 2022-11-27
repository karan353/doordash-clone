import "bootstrap/dist/css/bootstrap.min.css";

// components
import { Favorites } from "./sections/Favorites";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Join } from "./sections/Join";
import { Order } from "./sections/Order";

function App() {
  return (
    <div className="App">
      <Hero />
      <Favorites />
      <Join />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
