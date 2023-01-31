import styled from "styled-components";
import DonationListItem from "@/components/DonationListItem";
import donations from "@/db.json";

export default function HomePage() {
  return (
    <>
      <StyledCard>
        <h2> Spenden in deiner Nähe: </h2>
        {donations.map((donation) => {
          return <DonationListItem key={donation.id} donation={donation} />;
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
