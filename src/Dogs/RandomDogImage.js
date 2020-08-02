// https://dog.ceo/dog-api/
import React, {useEffect, useState} from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

function RandomDogImage({pageReload, seconds, secondstimer, id, timer}) {
  const [dogImageUrl, setDogImageUrl] = React.useState(null);
  const [intervalId, setIntervalId] = useState(null)

  useEffect(()=>{
    secondstimer()
}, []);

useEffect(() => {
    pageReload();
}, []);

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDogImageUrl(data.message);
        console.log(data);
      });
  }, []);

  if (dogImageUrl == null) return <div> Loading </div>;

  return (
    <MainContainer>
       <div>You have {seconds} seconds left before it is reloaded</div>
      <Image src={dogImageUrl} />
    </MainContainer>
  );
}

export default RandomDogImage;
