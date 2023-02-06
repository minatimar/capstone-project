import styled from "styled-components";
import { useState } from "react";

export default function DonationListItem({ donation, myUserID, handleDelete }) {
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
        <p>Stadtteil: Hamburg- {donation.district}</p>
        <p>Kontakt: {donation.contactInformation}</p>
        <label for="isBio">Bio</label>
        <input
          type="checkbox"
          id="isBio"
          name="checkbox1"
          checked={donation.isBio}
          readOnly
        />
        <label htmlfor="isVegetarian">Vegetarisch</label>
        <input
          type="checkbox"
          id="isVegetarian"
          name="checkbox2"
          checked={donation.isVegetarian}
          readOnly
        />
        <label htmlFor="isVegan">Vegan</label>
        <input
          type="checkbox"
          id="isVegan"
          name="checkbox3"
          checked={donation.isVegan}
          readOnly
        />
        <label htmlFor="isGlutenfree">Glutenfrei</label>
        <input
          type="checkbox"
          id="isGlutenfree"
          name="checkbox4"
          checked={donation.isGlutenfree}
          readOnly
        />
        <StyledLessInfoButton type="button" onClick={() => handleClick()}>
          Weniger Infos
        </StyledLessInfoButton>
        {donation.userID === myUserID && (
          //editbutton in die blauen klammern
          <StyledDeleteButton
            type="button"
            onClick={() => handleDelete(donation.id)}
          >
            Löschen
          </StyledDeleteButton>
        )}
      </StyledCard>
    );
  } else {
    return (
      <StyledCard>
        <p>{donation.image}</p>
        <p>Beschreibung: {donation.description}</p>
        <p>PLZ: {donation.zipCode}</p>
        <p>Stadtteil: Hamburg- {donation.district}</p>
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

const StyledDeleteButton = styled.button`
  border: solid red;
  background-color: red;
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
