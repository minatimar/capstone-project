import styled from "styled-components";
import { useState } from "react";
import TextLengthCounter from "./Counter";
import categoryData from "../helper/category.json";

export default function AddDonation({ createDonation }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [count, setCount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newDonationData = Object.fromEntries(formData);

    createDonation(newDonationData);
    setCount(0);
    event.target.reset();
    setIsFormVisible(!isFormVisible);
  }

  return (
    <StyledDiv>
      {!isFormVisible ? (
        <StyledButton onClick={() => setIsFormVisible(!isFormVisible)}>
          Neue Spende hinzufügen
        </StyledButton>
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="category">Kategorie:</label>
          <select name="category" id="category" required>
            <option value="">-Wähle bitte eine Kategorie-</option>
            {categoryData.map((category) => (
              <option key={category.id} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>

          <label htmlFor="description">Beschreibung:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            cols="30"
            rows="5"
            maxLength="250"
            pattern="[a-zA-ZäüöÄÜÖß0-9 _-+&*.,:;!?()%€]"
            onChange={(event) => setCount(event.target.value.length)}
            required
          />
          <TextLengthCounter max={250} counter={count} />

          <label htmlFor="bestBefore">Haltbar bis:</label>
          <input type="date" id="bestBefore" name="bestBefore" />

          <label htmlFor="zipCode">Postleitzahl:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            pattern="^[2-9][0-9][0-9][0-9][0-9]$"
            title="Bitte 5-stellige PLZ eingeben"
          />

          <label htmlFor="district"> Stadtteil: Hamburg-</label>
          <input
            type="input"
            id="district"
            name="district"
            title="Bitte Stadtteil angeben"
            pattern="[a-zA-ZäüöÄÜÖß0-9 _-+&*.,:;!?()%€]"
            maxLength="20"
            required
          />

          <label htmlFor="contactInformation">Kontaktinformation:</label>
          <input
            type="input"
            id="contactInformation"
            name="contactInformation"
            maxLength="25"
            pattern="[a-zA-ZäüöÄÜÖß0-9 _-+&*.,:;!?()%€]"
            required
          />

          <label htmlFor="isBio">Bio</label>
          <input type="checkbox" id="isBio" name="isBio" />

          <label htmlFor="isVegetarian">Vegetarisch</label>
          <input type="checkbox" id="isVegetarian" name="isVegetarian" />
          <label htmlFor="isVegan">Vegan</label>
          <input type="checkbox" id="isVegan" name="isVegan" />

          <label htmlFor="isGlutenfree">Glutenfrei</label>
          <input type="checkbox" id="isGlutenfree" name="isGlutenfree" />

          <button onClick={() => setIsFormVisible(!isFormVisible)}>
            zurück
          </button>
          <button type="submit">hinzufügen</button>
        </StyledForm>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  align-items: center;
`;

const StyledForm = styled.form`
  border-radius: 8px;
  gap: 10px;
  margin: 10px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid red 2px;
`;

const StyledButton = styled.button`
  border-radius: 8px;
  gap: 10px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid green 2px;
  background-color: green;
`;
