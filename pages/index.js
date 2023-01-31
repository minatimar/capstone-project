import styled from "styled-components";
import DonationListItem from "@/components/DonationListItem";
import donations from "@/db.json";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link href={"/myDonations"}>MyDonations</Link>
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
