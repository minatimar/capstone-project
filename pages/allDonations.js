import styled from "styled-components";
import DonationListItem from "@/components/DonationListItem";
import { useState } from "react";

export default function AllDonations({
  donations,
  myUserID,
  handleEditDonation,
}) {
  const [zipCode, setZipCode] = useState("");

  const filteredDonations = donations
    .filter((donation) => donation.userID != myUserID)
    .filter((donation) => donation.zipCode.includes(zipCode));

  return (
    <>
      <StyledWrapper>
        <StyledInput
          type="text"
          pattern="^[2-9][0-9][0-9][0-9][0-9]$"
          title="Bitte
        5-stellige PLZ eingeben"
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
          placeholder="Nach deiner PLZ filtern..."
        />
        <StyledHeadline>
          <StyledH2> Wartet auf deine Rettung: </StyledH2>
        </StyledHeadline>
        <StyledList>
          {filteredDonations.map((donation) => {
            return (
              <DonationListItem
                key={donation.id}
                donation={donation}
                donations={donations}
                handleEditDonation={handleEditDonation}
                myUserID={myUserID}
              />
            );
          })}
        </StyledList>
      </StyledWrapper>
      <StyledNavigation as="a" myUserID={myUserID} href={"/myDonations"}>
        Ich möchte spenden!
      </StyledNavigation>
    </>
  );
}

const StyledInput = styled.input`
  padding: 7px 0px 7px 88px;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  border: #008000 0.5px;
  font-size: 14px;
  width: 100%;
  margin: 25px 0px 0px 0px;
  background-color: #008000;
  color: white;
  ::placeholder {
    color: white;
    font-size: 14px;
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
  margin-top: 40px;
  padding: 10px;
`;

const StyledNavigation = styled.nav`
  z-index: 1;
  text-align: center;
  justify-content: center;
  position: fixed;
  background-color: #008000;
  padding: 10px 10px 10px 10px;
  margin: 0;
  width: 100%;
  bottom: 0;
  color: white;
  text-decoration: none;
  resize: none;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
`;
const StyledHeadline = styled.div`
  margin: 0 0 0px 22px;
  font-size: 12px;
`;
const StyledH2 = styled.h2`
  font-weight: normal;
`;
