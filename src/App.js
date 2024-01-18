import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState({ name: "manish" }); //here goes default object
  useEffect(() => {
    //Todo: here goes asyn call
  }, [apiData]);

  return (
    <div className="App">
      <Main apiData={apiData} /> //pass api respose as props to child component
    </div>
  );
}

export default App;
