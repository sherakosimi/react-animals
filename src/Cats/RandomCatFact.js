import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

// https://docs.thecatapi.com/

function RandomCatFact(props) {
  const [catFactUrl, setCatFactUrl] = React.useState(null);

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
    <div>{catFactUrl}</div>
    </MainContainer>
  );
}

export default RandomCatFact;
