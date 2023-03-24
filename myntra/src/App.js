import React, { useState, useEffect, createContext } from "react";
import "./App.css"
import { Navbar } from "./components/Navbar/Navbar";
import { Products } from "./components/Products/products";
import { Sidebar } from "./components/Sidebar/Sidebar";

export const ApiDataContext = createContext(); // Define the context outside the component

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(()=>{
    const getApiDetails =   async () => {
      let response = await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
      response = await response.json();
      setApiData(response);
    }

    getApiDetails()
  }, []);

  return (
    <ApiDataContext.Provider value={apiData}> {/* Use the context here */}
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Products />
      </div>
    </ApiDataContext.Provider>
  );
}

export default App;