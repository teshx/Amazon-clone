import "./App.css";
import CarasouleEeffect from "./components/carasoule/Carasoule.jsx";
import Header from "./components/Header/Header.jsx";
import Catagory from "./components/catagory/Catagory.jsx";
import Products from "./components/products/Products.jsx";
function App() {
  return (
    <>
      <Header />
      <CarasouleEeffect />
      <Catagory />
      <Products />
    </>
  );
}

export default App;
