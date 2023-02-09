import styled from "styled-components";
import DonationListItem from "@/components/DonationListItem";
import Link from "next/link";

export default function HomePage({ donations, myUserID, handleEditDonation }) {
  const filteredDonations = donations.filter(
    (donations) => donations.userID != myUserID
  );

  return (
    <>
      <h2> Spenden in deiner Nähe: </h2>
      {/* <Link myUserID={myUserID} href={"/myDonations"}>
        MyDonations
      </Link> */}
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
      <StyledNavigation>
        <Link myUserID={myUserID} href={"/myDonations"}>
          Ich möchte spenden!
        </Link>
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
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
