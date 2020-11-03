import React from "react";
import styled from "styled-components";
import themeVars from "./GlobalStyles"



const ViewReservation = ({userReservation}) => {
    const userData = userReservation ;
    console.log("VIEW RESERVATION", userData)

return <>
        <Wrapper>
        <Subtitle>Reservation for: {userData.givenName} {userData.surname}</Subtitle>
        <Text><Bold>Reservation #:</Bold> {userData.id}</Text>
        <Text><Bold>Flight #:</Bold> {userData.flight}</Text>
        <Text><Bold>seat #:</Bold> {userData.seat}</Text>
        <Text><Bold>Email:</Bold> {userData.email}</Text>
        </Wrapper>
        </>

}

const Wrapper = styled.div`
   margin: auto;
   border: 5px solid ${themeVars.alabamaCrimson};
   padding: 50px;
   width: 600px;
   height: 300px;
 `;

  const Subtitle = styled.h4`
   color: ${themeVars.alabamaCrimson};
   font-family: ${themeVars.headingFont};
   border-bottom: 2px solid ${themeVars.alabamaCrimson};
   font-size: 30px;
   padding-bottom: 10px;
   margin-bottom: 20px;
 `;

  const Bold = styled.span`
   font-weight: bold;
 `;

  const Text = styled.p`
   font-family: ${themeVars.contentFont};
   font-size: 20px;
   padding-bottom: 10px;
 `;



export default ViewReservation;