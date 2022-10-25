import { useState } from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';
import Property from './components/Property';
import Search from "./components/Search";
import PropertyController from "./controllers/property.controller";




function App() {

  let controller = new PropertyController();
  const [properties, setProperties] = useState(controller.getAllProperties());
  const onType = (event) => {
    setProperties(properties => controller.getFilteredProperties(event.target.value))
  };
  let searchBox = <Search onChange={onType}  ></Search>

  return (
    <>
      <Header searchBox={searchBox} ></Header>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 px-6 py-10">
        {properties.map(property => <Property key={property.id} data={property}></Property>)}
      </div>

      {properties.length < 1 ? <div className="h-96 max-w-full py-52 text-center align-middle text-zinc-400 text-2xl">
        No property found
      </div> : null
      }
      <Footer></Footer>
    </>

  );
}

export default App;
