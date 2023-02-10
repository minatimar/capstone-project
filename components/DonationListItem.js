import styled from "styled-components";
import { useState } from "react";
import EditDonation from "./EditDonation";

export default function DonationListItem({
  donation,
  myUserID,
  donations,
  setDonations,
  handleDelete,
  handleEditDonation,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [toggleDonationDetails, setToggleDonationDetails] = useState(false);
  function handleClick() {
    setToggleDonationDetails(!toggleDonationDetails);
  }

  if (toggleDonationDetails) {
    return (
      <>
        {isEdit ? (
          <StyledCard>
            <EditDonation
              setIsEdit={setIsEdit}
              isEdit={isEdit}
              donation={donation}
              id={donation.id}
              setDonations={setDonations}
              handleEditDonation={handleEditDonation}
              myUserID={myUserID}
            />
          </StyledCard>
        ) : (
          <StyledCard>
            <p>{donation.image}</p>
            <p>Kategorie: {donation.category}</p>
            <StyledDiscription>
              Beschreibung: {donation.description}
            </StyledDiscription>
            <p>Haltbar bis: {donation.bestBefore}</p>
            <p>PLZ: {donation.zipCode}</p>
            <p>Stadtteil: Hamburg- {donation.district}</p>
            <p>Kontakt: {donation.contactInformation}</p>
            <label htmlFor="isBio">Bio</label>
            <input
              type="checkbox"
              id="isBio"
              name="checkbox1"
              checked={donation.isBio}
              readOnly
            />
            <label htmlFor="isVegetarian">Vegetarisch</label>
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
              <StyledEditButton
                type="button"
                onClick={() => setIsEdit(!isEdit)}
              >
                Bearbeiten
              </StyledEditButton>
            )}
          </StyledCard>
        )}
      </>
    );
  } else {
    return (
      <>
        {isEdit ? (
          <StyledCard>
            <EditDonation
              donation={donation}
              setIsEdit={setIsEdit}
              isEdit={isEdit}
              id={donation.id}
              handleEditDonation={handleEditDonation}
              myUserID={myUserID}
            />
          </StyledCard>
        ) : (
          <StyledCard>
            <p>{donation.image}</p>
            <StyledDiscription>
              Beschreibung: {donation.description}
            </StyledDiscription>
            <p>PLZ: {donation.zipCode}</p>
            <p>Stadtteil: Hamburg- {donation.district}</p>
            <StyledMoreInfoButton type="button" onClick={() => handleClick()}>
              Mehr Infos
            </StyledMoreInfoButton>
            {donation.userID === myUserID && (
              <StyledDeleteButton
                type="button"
                onClick={() => handleDelete(donation.id)}
              >
                Löschen
              </StyledDeleteButton>
            )}
          </StyledCard>
        )}
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

const StyledDeleteButton = styled.button`
  border: solid red;
  background-color: red;
`;
const StyledEditButton = styled.button`
  border: solid pink;
  background-color: pink;
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

const StyledDiscription = styled.p`
  word-break: break-all;
`;
