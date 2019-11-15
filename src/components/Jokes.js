import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

export default props => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:4003/api/jokes")
      .then(({ data }) => {
        console.log(data);
        setJokes(data);
      });
  }, []);
  return (
    <StyledList>
      {jokes.map(joke => (
        <div key={joke.id}>
            <h5 >{joke.joke}</h5>
            <br></br>
        </div>
      ))}
    </StyledList>
  );
};

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
