import styled from "styled-components";
import donations from "../db.json";
import MyDonations from "../components/MyDonationList";
import AddDonation from "@/components/AddDonation";

export default function MyDonationList({
  donations,
  createDonation,
  handleDelete,
}) {
  return (
    <>
      <h3> Meine Spenden:</h3>
      <AddDonation createDonation={createDonation} />

      <StyledCard>
        {donations.map((donation) => {
          return (
            <MyDonations
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