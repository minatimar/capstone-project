import styled from "styled-components";
import MyDonationCard from "../components/MyDonationList";
import AddDonation from "@/components/AddDonation";
import Link from "next/link";

export default function MyDonations({
  donations,
  createDonation,
  handleDelete,
  handleDummyDonations,
  myUserID,
}) {
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
        {donations.map((donation) => {
          return (
            <MyDonationCard
              key={donation.id}
              donation={donation}
              handleDelete={handleDelete}
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
