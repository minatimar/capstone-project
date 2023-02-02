import styled from "styled-components";
import { StyledCard } from "./StyledCard";
import { translateCategory } from "@/helpers/translateCategory";

export default function MyDonationList({ donation, handleDelete }) {
  let germanCategory = translateCategory(donation.category);

  return (
    <>
      <StyledCard>
        <p>{donation.image}</p>
        <p>Kategorie: {germanCategory}</p>
        <p>Beschreibung: {donation.description}</p>
        <p>Haltbar bis: {donation.bestBefore}</p>
        <p>PLZ: {donation.zipCode}</p>
        <p>Stadtteil: Hamburg- {donation.district}</p>
        <p>Kontakt: {donation.contactInformation}</p>
        <label htmlFor="checkbox1">Bio</label>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox1"
          checked={donation.isBio}
          readOnly
        />
        <label htmlFor="checkbox2">Vegetarisch</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox2"
          checked={donation.isVegetarian}
          readOnly
        />
        <label htmlFor="checkbox3">Vegan</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox3"
          checked={donation.isVegan}
          readOnly
        />
        <label htmlFor="checkbox4">Glutenfrei</label>
        <input
          type="checkbox"
          id="checkbox4"
          name="checkbox4"
          checked={donation.isGlutenfree}
          readOnly
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
