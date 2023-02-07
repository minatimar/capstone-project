import styled from "styled-components";
import AddDonation from "@/components/AddDonation";
import Link from "next/link";
import DonationListItem from "@/components/DonationListItem";

export default function MyDonations({
  donations,
  createDonation,
  handleDelete,
  handleDummyDonations,
  myUserID,
}) {
  const filteredDonations = donations.filter(
    (donations) => donations.userID === myUserID
  );
  return (
    <>
      <h2> Meine Spenden:</h2>
      <Link href={"/"}>back</Link>
      <br />
      <button type="button" onClick={handleDummyDonations}>
        Reset to default
      </button>
      <AddDonation createDonation={createDonation} />

      <StyledCard>
        {filteredDonations.map((donation) => {
          return (
            <DonationListItem
              key={donation.id}
              donation={donation}
              handleDelete={handleDelete}
              myUserID={myUserID}
            />
          );
        })}
      </StyledCard>
    </>
  );
}
const StyledCard = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
