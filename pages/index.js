import styled from "styled-components";
import DonationListItem from "@/components/DonationListItem";
import Link from "next/link";

export default function HomePage({ donations, myUserID }) {
  return (
    <>
      <Link myUserID={myUserID} href={"/myDonations"}>
        MyDonations
      </Link>
      <h2> Spenden in deiner Nähe: </h2>
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
`;
