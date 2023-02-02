import styled from "styled-components";
import DonationListItem from "@/components/DonationListItem";
import Link from "next/link";

export default function HomePage({ donations }) {
  return (
    <>
      <Link href={"/myDonations"}>MyDonations</Link>
      <h2> Spenden in deiner Nähe: </h2>
      <StyledCard>
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
