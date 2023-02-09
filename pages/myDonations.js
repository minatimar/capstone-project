import styled from "styled-components";
import AddDonation from "@/components/AddDonation";
import Link from "next/link";
import DonationListItem from "@/components/DonationListItem";

export default function MyDonations({
  donations,
  setDonations,
  createDonation,
  handleDelete,
  handleDummyDonations,
  handleEditDonation,
  myUserID,
}) {
  const filteredDonations = donations.filter(
    (donations) => donations.userID === myUserID
  );
  return (
    <>
      <h2> Meine Spenden:</h2>
      <button type="button" onClick={handleDummyDonations}>
        Reset to default
      </button>
      <AddDonation createDonation={createDonation} />

      <StyledCard>
        {filteredDonations.map((donation) => {
          return (
            <DonationListItem
              donations={donations}
              setDonations={setDonations}
              key={donation.id}
              donation={donation}
              handleDelete={handleDelete}
              myUserID={myUserID}
              handleEditDonation={handleEditDonation}
            />
          );
        })}
      </StyledCard>
      <StyledNavigation>
        <Link href={"/"}>Ich möchte retten!</Link>
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

const StyledCard = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
