import styled from "styled-components";
import categoryData from "../helper/category.json";
import TextLengthCounter from "./Counter";
import { useState } from "react";

export default function EditDonation({
  donation,
  setIsEdit,
  isEdit,
  handleEditDonation,
  myUserID,
}) {
  const [count, setCount] = useState(0);
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const userDonation = {
      ...data,
      image: donation.image,
      userID: myUserID,
      id: donation.id,
      bestBefore: donation.bestBefore,
    };

    handleEditDonation(userDonation, donation.id);
    setIsEdit(!isEdit);
    event.target.reset();
  }

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="category">Kategorie:</label>
        <select
          name="category"
          id="category"
          defaultValue={donation.category}
          required
        >
          <option value="">-Wähle bitte eine Kategorie-</option>
          {categoryData.map((category) => (
            <option key={category.id} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>

        <label htmlFor="description">Beschreibung:</label>
        <textarea
          defaultValue={donation.description}
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
        <input
          defaultValue={donation.bestBefore}
          type="date"
          id="bestBefore"
          name="bestBefore"
        />

        <label htmlFor="zipCode">Postleitzahl:</label>
        <input
          defaultValue={donation.zipCode}
          type="text"
          id="zipCode"
          name="zipCode"
          pattern="^[2-9][0-9][0-9][0-9][0-9]$"
          title="Bitte 5-stellige PLZ eingeben"
        />

        <label htmlFor="district"> Stadtteil: Hamburg-</label>
        <input
          defaultValue={donation.district}
          type="input"
          id="district"
          name="district"
          title="Bitte Stadtteil angeben"
          pattern="^[a-zA-ZäüöÄÜÖß0-9 _+&*.,:;!?()%]+"
          maxLength="20"
          required
        />

        <label htmlFor="contactInformation">Kontaktinformation:</label>
        <input
          defaultValue={donation.contactInformation}
          type="input"
          id="contactInformation"
          name="contactInformation"
          maxLength="25"
          pattern="^[a-zA-ZäüöÄÜÖß0-9 @_+/&*.,:]+"
          required
        />
        <StyledCheckbox>
          <div>
            <input
              type="checkbox"
              defaultChecked={donation.isBio}
              id="isBio"
              name="isBio"
            />
            <label htmlFor="isBio">Bio</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={donation.isVegetarian}
              id="isVegetarian"
              name="isVegetarian"
            />
            <label htmlFor="isVegetarian">Vegetarisch</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={donation.isVegan}
              id="isVegan"
              name="isVegan"
            />
            <label htmlFor="isVegan">Vegan</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={donation.isGlutenfree}
              id="isGlutenfree"
              name="isGlutenfree"
            />
            <label htmlFor="isGlutenfree">Glutenfrei</label>
          </div>
        </StyledCheckbox>
        <StyledSection>
          <StyledBackButton onClick={() => setIsEdit(!isEdit)}>
            zurück
          </StyledBackButton>
          <StyledSaveButton type="submit">speichern</StyledSaveButton>
        </StyledSection>
      </StyledForm>
    </StyledDiv>
  );
}

const StyledSection = styled.section`
  display: flex;
  display: inline - block;
  margin-top: 10px;
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
const StyledDiv = styled.div`
  text-align: center;
  /* padding-left: 10px;
  padding-right: 10px; */
`;
const StyledForm = styled.form`
  border-radius: 8px;
  gap: 5px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  word-wrap: break-word;
  word-break: break-word;
  padding-top: 0px;
  padding-bottom: 0px;
`;
const StyledCheckbox = styled.div`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 0px;
  display: grid;
  grid-row-gap: 7px;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  width: 68%;
`;
