import styled from "styled-components";
import { useState } from "react";
import { StyledCard } from "./StyledCard";

export default function DonationListItem({ donation }) {
  const [toggleDonationDetails, setToggleDonationDetails] = useState(false);
  function handleClick() {
    setToggleDonationDetails(!toggleDonationDetails);
  }
  if (toggleDonationDetails) {
    return (
      <StyledCard>
        <p>{donation.image}</p>
        <p>Kategorie: {donation.category}</p>
        <p>Beschreibung: {donation.description}</p>
        <p>Haltbar bis: {donation.bestBefore}</p>
        <p>PLZ: {donation.zipCode}</p>
        <p>Stadtteil: {donation.district}</p>
        <p>Kontakt: {donation.contactInformation}</p>
        <label for="checkbox1">Bio</label>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox1"
          checked={donation.isBio}
          readOnly
        />
        <label for="checkbox2">Vegetarisch</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox2"
          checked={donation.isVegetarian}
          readOnly
        />
        <label for="checkbox3">Vegan</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox3"
          checked={donation.isVegan}
          readOnly
        />
        <label for="checkbox4">Glutenfrei</label>
        <input
          type="checkbox"
          id="checkbox4"
          name="checkbox4"
          checked={donation.isGlutenfree}
          readOnly
        />
        <StyledLessInfoButton type="button" onClick={() => handleClick()}>
          Weniger Infos
        </StyledLessInfoButton>
      </StyledCard>
    );
  } else {
    return (
      <StyledCard>
        <p>{donation.image}</p>
        <p>Beschreibung: {donation.description}</p>
        <p>PLZ: {donation.zipCode}</p>
        <p>Stadtteil: {donation.district}</p>
        <StyledMoreInfoButton type="button" onClick={() => handleClick()}>
          Mehr Infos
        </StyledMoreInfoButton>
      </StyledCard>
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
