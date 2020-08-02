import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Header from "./Header/Header";
import HomePage from "./HomePage";
import RandomCatImage from "./Cats/RandomCatImage";
import RandomDogImage from "./Dogs/RandomDogImage";
import RandomCatFact from "./Cats/RandomCatFact";
import "./App.css";

const MainContainer = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  display: flex;
`;

function App() {
  const [seconds, setSeconds] = useState(30)
  const [intervalId, setIntervalId] = useState(null)

  function pageReload(){
   const timer = setTimeout(() => {
      window.location.reload();
    }, 30000);
    return () => window.clearInterval(timer)
  }


   function secondstimer(){
    setSeconds(30)
     const id = window.setInterval(()=>{
      setSeconds(seconds=> seconds-1);
    }, 1000);
    return () => window.clearInterval(id)
  }

  return (
    <MainContainer>
      <Header />
      <Router>
        <HomePage path="/" />
        <RandomCatImage pageReload = {pageReload} secondstimer = {secondstimer} seconds={seconds} path="/randomCat" />
        <RandomDogImage pageReload = {pageReload} secondstimer = {secondstimer} seconds={seconds}  path = "/randomDog"/>
        <RandomCatFact pageReload= {pageReload} secondstimer= {secondstimer} seconds={seconds}  path = "/randomCatFact"/>
      </Router>
    </MainContainer>
  );
}

export default App;
