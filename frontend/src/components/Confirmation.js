import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({userReservation}) => {


  return (
    <>
    <Wrapper>
      <Subtitle>Your flight is confirmed!</Subtitle>
      <Text><span>Reservation #:</span>{userReservation.id}</Text>
      <Text><span>Flight #:</span>{userReservation.flight}</Text>
      <Text><span>Seat #:</span>{userReservation.seat}</Text>
      <Text><span>Name:</span>{userReservation.givenName} {userReservation.surname}</Text>
      <Text><span>Email:</span>{userReservation.email}</Text>
    </Wrapper>
    
      <Tomb src={tombstone} alt="tombstone" />
    
    </>
  )
  
};

const Wrapper = styled.div`
border: 5px solid ${themeVars.alabamaCrimson};
padding: 30px;
font-size: 30px;
margin: 20px auto ;
height: 500px;
width: 600px;
`;

const Subtitle = styled.div`
text-align:center;
margin-bottom: 20px;

`
const Text = styled.p`
font-family: ${themeVars.contentFont};
padding-bottom: 5px;
 `;



const Tomb = styled.img`
height: 150px;
margin:0 auto;
`;

export default Confirmation;
