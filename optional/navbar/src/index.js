import React from "react";
import ReactDOM from "react-dom";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";

import "./style.css";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <FormWrapper />
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);