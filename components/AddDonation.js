import styled from "styled-components";
import { useState } from "react";

export default function AddDonation({ createDonation }) {
  const [toggleAddButton, setToggleAddButton] = useState(true);
  function handleClick() {
    setToggleAddButton(!toggleAddButton);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    createDonation(data);

    event.target.reset();
    setToggleAddButton(!toggleAddButton);
  }

  return (
    <StyledDiv>
      {toggleAddButton ? (
        <StyledButton onClick={handleClick}>
          Neue Spende hinzufügen
        </StyledButton>
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="category">Kategorie:</label>
          <select name="category" id="category">
            <option value="fruits&vegetables">Obst&Gemüse</option>
            <option value="selfmade">Selbstgemacht</option>
            <option value="Bread">Backwaren</option>
          </select>
          <label htmlFor="description">Beschreibung:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            cols="30"
            rows="3"
          />

          <label htmlFor="bestBefore">Haltbar bis:</label>
          <input type="date" id="bestBefore" name="bestBefore" />

          <label htmlFor="zipcode">Postleitzahl:</label>
          <input type="input" id="zipcode" name="zipcode" />

          <label htmlFor="district">Stadtteil:</label>
          <input type="input" id="district" name="district" />

          <label htmlFor="contactInformation">Kontaktinformation:</label>
          <input
            type="input"
            id="contactInformation"
            name="contactInformation"
          />

          <label htmlFor="checkbox1">Bio</label>
          <input type="checkbox" id="isBio" name="isBio" value="value1" />

          <label htmlFor="checkbox2">Vegetarisch</label>
          <input
            type="checkbox"
            id="isVegetarian"
            name="isVegetarian"
            value="value2"
          />
          <label htmlFor="checkbox3">Vegan</label>
          <input type="checkbox" id="isVegan" name="isVegan" value="value3" />

          <label htmlFor="checkbox4">Glutenfrei</label>
          <input
            type="checkbox"
            id="isGlutenfree"
            name="isGlutenfree"
            value="value4"
          />

          <button onClick={handleClick}>zurück</button>
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
  padding: 20px;
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
