import styled from "styled-components";

export default function MyDonations({ donation, handleDelete }) {
  return (
    <>
      <StyledCard>
        <p>{donation.image}</p>
        <p>Kategorie: {donation.category}</p>
        <p>Beschreibung: {donation.description}</p>
        <p>Haltbar bis: {donation.bestBefore}</p>
        <p>PLZ: {donation.zipCode}</p>
        <p>Stadtteil: {donation.district}</p>
        <p>Kontakt: {donation.contactInformation}</p>
        <label htmlFor="checkbox1">Bio</label>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox1"
          value="value1"
          checked={donation.isBio}
        />
        <label htmlFor="checkbox2">Vegetarisch</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox2"
          value="value2"
          checked={donation.isVegetarian}
        />
        <label htmlFor="checkbox3">Vegan</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox3"
          value="value3"
          checked={donation.isVegan}
        />
        <label htmlFor="checkbox4">Glutenfrei</label>
        <input
          type="checkbox"
          id="checkbox4"
          name="checkbox4"
          value="value4"
          checked={donation.isGlutenfree}
        />
        <StyledDeleteButton
          type="button"
          onClick={() => handleDelete(donation.id)}
        >
          Löschen
        </StyledDeleteButton>
      </StyledCard>
    </>
  );
}

const StyledDeleteButton = styled.button`
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
