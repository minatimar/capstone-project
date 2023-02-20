import styled from "styled-components";
import { useState } from "react";
import EditDonation from "./EditDonation";
import Image from "next/image";

export default function DonationListItem({
  donation,
  myUserID,
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
            <StyledImageGroß>
              <Image
                src={donation.image}
                alt="Hier Foto hochladen"
                width={190}
                height={100}
              />
            </StyledImageGroß>

            <StyledP>
              <p>Kategorie: {donation.category}</p>
              <p>{donation.description}</p>
              <p>Haltbar bis: {donation.bestBefore}</p>
              <p>
                {donation.zipCode} Hamburg- {donation.district}
              </p>
              <p>Kontakt: {donation.contactInformation}</p>
            </StyledP>
            <StyledCheckbox>
              <div>
                <input
                  type="checkbox"
                  id="isBio"
                  name="checkbox1"
                  checked={donation.isBio}
                  readOnly
                />
                <label htmlFor="isBio">Bio</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="isVegetarian"
                  name="checkbox2"
                  checked={donation.isVegetarian}
                  readOnly
                />
                <label htmlFor="isVegetarian">Vegetarisch</label>
              </div>
              {/* </StyledCheckbox>
            <StyledCheckbox> */}
              <div>
                <input
                  type="checkbox"
                  id="isVegan"
                  name="checkbox3"
                  checked={donation.isVegan}
                  readOnly
                />
                <label htmlFor="isVegan">Vegan</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="isGlutenfree"
                  name="checkbox4"
                  checked={donation.isGlutenfree}
                  readOnly
                />
                <label htmlFor="isGlutenfree">Glutenfrei</label>
              </div>
            </StyledCheckbox>
            <StyledSection>
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
            </StyledSection>
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
            <StyledPara>
              <StyledImageKlein>
                <Image
                  src={donation.image}
                  alt="picture"
                  width={190}
                  height={100}
                />
              </StyledImageKlein>
              <p>{donation.description}</p>
              <p>Haltbar bis: {donation.bestBefore}</p>
              <p>
                {donation.zipCode} Hamburg- {donation.district}
              </p>
            </StyledPara>
            <StyledSection>
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
            </StyledSection>
          </StyledCard>
        )}
      </>
    );
  }
}

const StyledImageKlein = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

const StyledImageGroß = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 0px;
`;

const StyledCard = styled.li`
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 7px;
  margin-bottom: 20px;
  gap: 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid black 1px;
  background-color: #f7fbf5;
  :last-child {
    margin-bottom: 50px;
  }
  :first-child {
    margin-top: 0px;
  }
`;

const StyledCheckbox = styled.div`
  //display: inline-block;
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

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin-top: 5px;
  //  display: inline - block;
  //margin-top: 0px;
  margin-bottom: 5px;
`;
const StyledP = styled.p`
  word-break: break-all;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
  margin-top: 0px;
`;

const StyledPara = styled.div`
  word-break: break-all;
  line-height: 1;
`;
const StyledDeleteButton = styled.button`
  border-radius: 50px;
  background-color: #69aa58;
  width: 100px;
  color: white;
  border: #69aa58 0.5px;
  padding: 5px 5px;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
`;
const StyledMoreInfoButton = styled.button`
  padding: 5px 5px;
  background-color: #008000;
  border-radius: 50px;
  width: 100px;
  color: white;
  border: #008000 0.5px;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
`;
const StyledEditButton = styled.button`
  //margin-right: 100px;
  background-color: #69aa58;
  border: #69aa58 0.5px;
  border-radius: 50px;
  width: 100px;
  color: white;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
`;
const StyledLessInfoButton = styled.button`
  border-radius: 50px;
  background-color: #008000;
  width: 100px;
  padding: 5px 5px;
  color: white;
  border: #008000 0.5px;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
`;
