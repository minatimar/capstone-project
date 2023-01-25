import styled from "styled-components";
import InfoButton from "@/components/ToggleButton";
import DonationListItem from "@/components/DonationListItem";
import donations from "../db.json";

export default function HomePage() {
  return (
    <>
      <StyledList>
        {donations.map((donation) => {
          return <DonationListItem key={donation.id} donation={donation} />;
        })}
      </StyledList>
    </>
  );
}
const StyledList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
