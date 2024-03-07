import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Packages from "./components/packages";
import Testimonial from "./components/testimonial";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Packages/>
     <Testimonial/>
     <About/>
     <Footer/>
    </div>
  );
}

export default App;
