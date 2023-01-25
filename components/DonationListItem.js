import styled from "styled-components";
import { useState } from "react";

export default function DonationListItem({ donation }) {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(!toggle);
  }
  if (toggle) {
    return (
      <>
        <StyledCard>
          <p>{donation.image}</p>
          <p>Kategorie: {donation.category}</p>
          <p>Beschreibung: {donation.description}</p>
          <p>Entfernung: {donation.distance}</p>
          <p>Haltbar bis: {donation.good_before}</p>
          <p>Kontakt: {donation.contact_information}</p>
          <StyledLessInfoButton type="button" onClick={() => handleClick()}>
            Weniger Infos
          </StyledLessInfoButton>
        </StyledCard>
      </>
    );
  } else {
    return (
      <>
        <StyledCard>
          <p>{donation.image}</p>
          <p>Beschreibung: {donation.description}</p>
          <p>Entfernung: {donation.distance}</p>
          <StyledMoreInfoButton type="button" onClick={() => handleClick()}>
            Mehr Infos
          </StyledMoreInfoButton>
        </StyledCard>
      </>
    );
  }
}

const StyledLessInfoButton = styled.button`
  border: solid red;
  background-color: red;
`;
const StyledMoreInfoButton = styled.button`
  border: solid green;
  background-color: green;
`;
const StyledCard = styled.li`
  border-radius: 8px;
  gap: 10px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid black 2px;
`;
