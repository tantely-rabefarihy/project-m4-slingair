import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import GlobalStyles, { themeVars } from "./GlobalStyles";
import ViewReservation from "./ViewReservation";

const App = () => {

  const [userReservation, setUserReservation] = useState({});

  const updateUserReservation = (newData) => {
    // before:  setUserReservation({ ...userReservation,...newData  });
    setUserReservation({...newData });
  };

  useEffect(() => {
    // TODO: check localStorage for an id
    // if yes, get data from server and add it to state

    let reservationID = localStorage.getItem("id");

    if (reservationID || reservationID !== "") {
      const getUserReserve = async () => {
        let result1 = await fetch(`/reservations/${reservationID}`);
        let result2 = await result1.json();
        console.log("VALUE OF result2.data : ", result2.data);
        updateUserReservation(result2.data);
      };
      getUserReserve();
      }
  }, [setUserReservation]);



  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header userReservation={userReservation} />
      <Main>
        <Switch>
          <Route exact path="/" >
            <SeatSelect updateUserReservation={updateUserReservation}/>
          </Route>
          <Route exact path="/confirmed">
            <Confirmation userReservation={userReservation} />
          </Route>
          <Route exact path="/view-reservation">
            <ViewReservation userReservation={userReservation} />
          </Route>
          <Route path="">404: Oops!</Route>
        </Switch>
        <Footer />
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  background: ${themeVars.background};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
`;

export default App;
