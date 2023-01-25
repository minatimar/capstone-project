// import styled from "styled-components";
// import { useState } from "react";
// import donations from "../db.json";

// export default function InfoButton() {
//   const [moreInfo, setMoreInfo] = useState(donations);

//   function handleClick(id) {
//     setMoreInfo(
//       moreInfo.map((oneDonation) => {
//         if (oneDonation.id === id) {
//           return { ...oneDonation, isShown: !isShown };
//         } else {
//           return oneDonation;
//         }
//       })
//     );

//     return (
//       <StyledDiv>
//         {moreInfo.map((info) => {
//           return moreInfo.isShown ? (
//             <StyledList>
//               {donations.map((donation) => (
//                 <StyledCard key={donation.id}>
//                   <p>{donation.image}</p>
//                   <p>Kategorie: {donation.category}</p>
//                   <p>Beschreibung: {donation.description}</p>
//                   <p>Entfernung: {donation.distance}</p>
//                   <p>Haltbar bis: {donation.good_before}</p>
//                   <p>Kontakt: {donation.contact_information}</p>

//                   <StyledLessInfoButton
//                     type="button"
//                     onClick={() => handleClick(donation.id)}
//                   >
//                     Weniger Infos
//                   </StyledLessInfoButton>
//                 </StyledCard>
//               ))}
//             </StyledList>
//           ) : (
//             <StyledList>
//               {donations.map((donation) => (
//                 <StyledCard key={donation.id}>
//                   <p>{donation.image}</p>
//                   <p>Beschreibung: {donation.description}</p>
//                   <p>Entfernung: {donation.distance}</p>
//                   <StyledMoreInfoButton
//                     type="button"
//                     onClick={() => handleClick(donation.id)}
//                   >
//                     Mehr Infos
//                   </StyledMoreInfoButton>
//                 </StyledCard>
//               ))}
//             </StyledList>
//           );
//         })}
//       </StyledDiv>
//     );
//   }
// }

// const StyledLessInfoButton = styled.button`
//   border: solid red;
//   background-color: red;
// `;
// const StyledMoreInfoButton = styled.button`
//   border: solid green;
//   background-color: green;
// `;

// const StyledDiv = styled.div`
//   border: solid blue;
//   /* display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center; */
// `;
// const StyledCard = styled.li`
//   // z-index: 1;
//   border: 2px solid black;
//   text-align: center;
//   width: 100%;
//   padding: 10px;
//   margin: 10px;
// `;
