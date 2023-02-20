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
        <StyledNewDonationButton
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          Neue Spende hinzufügen
        </StyledNewDonationButton>
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          {/* <label htmlFor="category">Kategorie:</label> */}
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
            pattern="^[a-zA-ZäüöÄÜÖß0-9 _+&*.,:;!?()%]+"
            onChange={(event) => setCount(event.target.value.length)}
            required
          />
          <TextLengthCounter max={250} counter={count} />
          <label htmlFor="bestBefore">Haltbar bis:</label>
          <input type="date" id="bestBefore" name="bestBefore" required />
          <label htmlFor="zipCode">Postleitzahl:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            pattern="^[2-9][0-9][0-9][0-9][0-9]$"
            title="Bitte 5-stellige PLZ eingeben"
            required
          />
          <label htmlFor="district"> Stadtteil: Hamburg-</label>
          <input
            type="input"
            id="district"
            name="district"
            title="Bitte Stadtteil angeben"
            pattern="^[a-zA-ZäüöÄÜÖß _+&*.,:;()]+"
            maxLength="20"
          />
          <label htmlFor="contactInformation">Kontaktinformation:</label>
          <input
            type="input"
            id="contactInformation"
            name="contactInformation"
            maxLength="25"
            pattern="^[a-zA-Z0-9 @_+&*.,/:]+"
            required
          />
          <StyledCheckbox>
            <div>
              <input type="checkbox" id="isBio" name="isBio" />
              <label htmlFor="isBio">Bio</label>
            </div>
            <div>
              <input type="checkbox" id="isVegetarian" name="isVegetarian" />
              <label htmlFor="isVegetarian">Vegetarisch</label>
            </div>
            <div>
              <input type="checkbox" id="isVegan" name="isVegan" />
              <label htmlFor="isVegan">Vegan</label>
            </div>
            <div>
              <input type="checkbox" id="isGlutenfree" name="isGlutenfree" />
              <label htmlFor="isGlutenfree">Glutenfrei</label>
            </div>
          </StyledCheckbox>
          <StyledSection>
            <StyledBackButton onClick={() => setIsFormVisible(!isFormVisible)}>
              zurück
            </StyledBackButton>
            <StyledSaveButton type="submit">speichern</StyledSaveButton>
          </StyledSection>
        </StyledForm>
      )}
    </StyledDiv>
  );
}

const StyledSection = styled.section`
  display: flex;
  display: inline - block;
  margin-top: 0px;
`;

const StyledBackButton = styled.button`
  margin-right: 90px;
  background-color: #008000;
  border-radius: 50px;
  width: 100px;
  color: white;
  border: #008000 0.5px;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
`;
const StyledSaveButton = styled.button`
  border-radius: 50px;
  background-color: #69aa58;
  width: 100px;
  padding: 5px 5px;
  color: white;
  border: #69aa58 0.5px;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
`;

const StyledCheckbox = styled.div`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 15px;
  padding-top: 0px;
  display: grid;
  grid-row-gap: 7px;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  width: 68%;
`;

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledForm = styled.form`
  border-radius: 8px;
  gap: 5px;
  margin: 20px;
  padding: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  border: solid black 1px;
  word-wrap: break-word;
  word-break: break-word;
`;

const StyledNewDonationButton = styled.button`
  border-radius: 50px;
  margin: 18px 0px 0px 0px;
  padding: 7px;
  background-color: #008000;
  text-decoration: none;
  color: white;
  text-align: center;
  width: 100%;
  border: #008000 0.5px;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  font-size: 14px;
`;
