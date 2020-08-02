import React, {useEffect, useState}from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;



// https://docs.thecatapi.com/

function RandomCatFact({pageReload, seconds, secondstimer, id, timer}) {
  const [intervalId, setIntervalId] = useState(null)
  const [catFactUrl, setCatFactUrl] = React.useState(null);
  useEffect(()=>{
      secondstimer()
  }, []);

  useEffect(() => {
      pageReload();
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
