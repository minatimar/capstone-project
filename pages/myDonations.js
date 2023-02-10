import styled from "styled-components";
import AddDonation from "@/components/AddDonation";
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
      <StyledNavigation as="a" href={"/allDonations"}>
        Ich möchte retten!
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
  text-decoration: none;
  color: black;
`;
const StyledCard = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
