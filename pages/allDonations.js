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
    .filter((donations) => donations.userID != myUserID)
    .filter((donation) => donation.zipCode.includes(zipCode));

  return (
    <>
      <h2> Spenden in deiner Nähe: </h2>
      <input
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="nach PLZ filtern"
      />
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

      <StyledNavigation as="a" myUserID={myUserID} href={"/myDonations"}>
        Ich möchte spenden!
      </StyledNavigation>
    </>
  );
}

const StyledNavigation = styled.nav`
  z-index: 1;
  text-align: center;
  justify-content: center;
  position: fixed;
  background-color: green;
  padding: 10px 10px 10px 10px;
  margin: 0;
  width: 100%;
  bottom: 0;
  color: black;
  text-decoration: none;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
