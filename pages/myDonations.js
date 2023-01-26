import styled from "styled-components";
import DonationListItem from "@/components/DonationListItem";
import donations from "../db.json";
import MyDonations from "../components/MyDonationList";
import AddDonation from "@/components/AddDonation";

export default function MyDonationList() {
  return (
    <>
      <h3> Meine Spenden:</h3>
      <AddDonation />

      <StyledCard>
        {donations.map((donation) => {
          return <MyDonations key={donation.id} donation={donation} />;
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
