import React, {useState, useEffect} from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

// https://docs.thecatapi.com/

function RandomCatImage({pageReload, seconds, secondstimer, id, timer}) {
  const [catImageUrl, setCatImageUrl] = React.useState(null);
  const [intervalId, setIntervalId] = useState(null)

  useEffect(()=>{
    secondstimer()
}, []);

useEffect(() => {
    pageReload();
}, []);

  React.useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatImageUrl(data[0].url);
        console.log(data);
      });
  }, []);

  if (catImageUrl == null) return <div> Loading </div>;

  return (
    <MainContainer>
       <div>You have {seconds} seconds left before it is reloaded</div>
      <Image src={catImageUrl} />
    </MainContainer>
  );
}

export default RandomCatImage;
