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
    const userDonation = { ...data, userID: myUserID };

    handleEditDonation(userDonation, donation.id);
    setIsEdit(!isEdit);
    event.target.reset();
  }

  return (
    <>
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
          //required
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
          //required
        />

        <label htmlFor="contactInformation">Kontaktinformation:</label>
        <input
          defaultValue={donation.contactInformation}
          type="input"
          id="contactInformation"
          name="contactInformation"
          maxLength="25"
          pattern="^[a-zA-ZäüöÄÜÖß0-9 @_+&*.,:]+"
          // required
        />

        <label htmlFor="isBio">Bio</label>
        <input
          type="checkbox"
          defaultChecked={donation.isBio}
          id="isBio"
          name="isBio"
        />

        <label htmlFor="isVegetarian">Vegetarisch</label>
        <input
          type="checkbox"
          defaultChecked={donation.isVegetarian}
          id="isVegetarian"
          name="isVegetarian"
        />
        <label htmlFor="isVegan">Vegan</label>
        <input
          type="checkbox"
          defaultChecked={donation.isVegan}
          id="isVegan"
          name="isVegan"
        />

        <label htmlFor="isGlutenfree">Glutenfrei</label>
        <input
          type="checkbox"
          defaultChecked={donation.isGlutenfree}
          id="isGlutenfree"
          name="isGlutenfree"
        />

        <button onClick={() => setIsEdit(!isEdit)}>zurück</button>
        <button type="submit">speichern</button>
      </StyledForm>
    </>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
  gap: 10px;
`;
