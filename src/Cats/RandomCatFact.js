import React, {useEffect, useState}from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;



// https://docs.thecatapi.com/

function RandomCatFact(props) {
  const [catFactUrl, setCatFactUrl] = React.useState(null);
  const [seconds, setSeconds] = useState(30)
  const [intervalId, setIntervalId] = useState(null)
  const [count, setCount] = useState(null)


  useEffect(()=>{
      const id = window.setInterval(()=>{
        setSeconds(seconds=> seconds-1);
      }, 1000);
      setIntervalId(id);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount('Timeout called!');
      window.location.reload();
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatFactUrl(data.all[Math.floor(Math.random() * 231)].text);
        console.log(data);
      });
  }, []);

  if (catFactUrl == null) return <div> Loading </div>;

  return (
    <MainContainer>
    <div>You have {seconds} seconds left before it is reloaded</div>
    <div>Fact:</div>
    <div>{catFactUrl}</div>
    </MainContainer>
  );
}

export default RandomCatFact;
