import styled from "styled-components";
import { useState } from "react";
import Counter from "./Counter";

export default function AddDonation({ createDonation }) {
  const [toggleAddButton, setToggleAddButton] = useState(true);
  const [count, setCount] = useState(0);
  function handleClick() {
    setToggleAddButton(!toggleAddButton);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    createDonation(data);
    console.log(data);

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
            <option value="fruits&vegetables">Obst & Gemüse</option>
            <option value="homemade">Selbstgemacht</option>
            <option value="bread">Backwaren</option>
            <option value="dairy">Käse, Eier & Molkerei</option>
            <option value="frozen">Tiefkühlkost</option>
            <option value="sweet&salty">Süßes & Salziges</option>
            <option value="beverage">Getränke</option>
            <option value="meat&fish">Fleisch & Fisch</option>
          </select>
          <label htmlFor="description">Beschreibung:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            cols="30"
            rows="3"
            maxL="250"
            pattern="[a-zA-ZäüöÄÜÖß0-9 -+&*.,:;!?()%€]"
            onChange={(event) => setCount(event.target.value.length)}
          />
          <Counter max={250} counter={count} />

          <label htmlFor="bestBefore">Haltbar bis:</label>
          <input type="date" id="bestBefore" name="bestBefore" />

          <label htmlFor="zipcode">Postleitzahl:</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            pattern="^[0-9][0-9][0-9][0-9][0-9]$"
            title="Bitte 5-stellige PLZ eingeben"
            required
          />

          <label htmlFor="district"> Stadtteil: Hamburg-</label>
          <input
            type="input"
            id="district"
            name="district"
            title="Bitte Stadtteil angeben"
          />

          <label htmlFor="contactInformation">Kontaktinformation:</label>
          <input
            type="input"
            id="contactInformation"
            name="contactInformation"
            required
          />

          <label htmlFor="checkbox1">Bio</label>
          <input type="checkbox" id="isBio" name="isBio" />

          <label htmlFor="checkbox2">Vegetarisch</label>
          <input type="checkbox" id="isVegetarian" name="isVegetarian" />
          <label htmlFor="checkbox3">Vegan</label>
          <input type="checkbox" id="isVegan" name="isVegan" />

          <label htmlFor="checkbox4">Glutenfrei</label>
          <input type="checkbox" id="isGlutenfree" name="isGlutenfree" />

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
