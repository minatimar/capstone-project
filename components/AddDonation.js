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
          <form>
            <label for="category">Kategorie:</label>
            <select name="category" id="category">
              <option value="fruits&vegetables">Obst&Gemüse</option>
              <option value="selfmade">Selbstgemacht</option>
              <option value="Bread">Backwaren</option>
            </select>
            <label for="description">Beschreibung:</label>
            <textarea
              type="text"
              id="description"
              name="description"
              cols="30"
              rows="3"
            />

            <label for="bestBefore">Haltbar bis:</label>
            <input type="date" id="good_before" name="good_before" />

            <label for="zipcode">Postleitzahl:</label>
            <input type="input" id="zipcode" name="zipcode" />

            <label for="district">Stadtteil:</label>
            <input type="input" id="district" name="district" />

            <label for="contact">Kontaktinformation:</label>
            <input
              type="input"
              id="contact_information"
              name="contact_information"
            />

            <label for="checkbox1">Bio</label>
            <input type="checkbox" id="isBio" name="isBio" value="value1" />
            <label for="checkbox2">Vegetarisch</label>
            <input
              type="checkbox"
              id="isVegetarian"
              name="isVegetarian"
              value="value2"
            />
            <label for="checkbox3">Vegan</label>
            <input type="checkbox" id="isVegan" name="isVegan" value="value3" />
            <label for="checkbox4">Glutenfrei</label>
            <input
              type="checkbox"
              id="isGlutenfree"
              name="isGlutenfree"
              value="value4"
            />
          </form>
          <button onClick={handleClick}>zurück</button>
          <button type="submit">hinzufügen</button>
        </StyledForm>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  align-items: center;
  /* gap: 10px;
  margin: 10px;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid red 2px; */
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
