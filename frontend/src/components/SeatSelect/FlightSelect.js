import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { themeVars } from "../GlobalStyles";

const FlightSelect = ({ flightNumber, handleFlightSelect }) => {
  const [flights, setFlights] = useState(["Choose a flight"]);

  useEffect(() => {
    // TODO: fetch the flight numbers
    fetch("/flights")
    .then((res) => res.json())
    .then((data) => { 
      setFlights([flights, data.data.allFlights])})

  }, []);

  return (
    <Wrapper>
      <label htmlFor="flight">Flight Number :</label>
      {/* TODO: Create a dropdown from the flight numbers */}
      <select value={flightNumber} onChange={handleFlightSelect}>
      {flights.map(flight => { 
        return <option value={flight} key={flight}>{flight}</option>
      })}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${themeVars.cadmiumRed};
  height: 80px;
  display: flex;
  align-items: center;
  padding: ${themeVars.pagePadding};
  margin-bottom: ${themeVars.pagePadding};
`;

export default FlightSelect;
