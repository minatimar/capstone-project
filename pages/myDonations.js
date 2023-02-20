import styled from "styled-components";
import AddDonation from "@/components/AddDonation";
import DonationListItem from "@/components/DonationListItem";

export default function MyDonations({
  donations,
  setDonations,
  createDonation,
  handleDelete,
  handleEditDonation,
  myUserID,
}) {
  const filteredDonations = donations.filter(
    (donations) => donations.userID === myUserID
  );
  return (
    <>
      <Wrapper>
        <AddDonation createDonation={createDonation} />
        <StyledHeadline>
          <StyledH2> Meine Spenden:</StyledH2>
        </StyledHeadline>
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
      </Wrapper>
      <StyledNavigation as="a" href={"/allDonations"}>
        Ich möchte retten!
      </StyledNavigation>
    </>
  );
}

const Wrapper = styled.div`
  padding: 10px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
`;

const StyledNavigation = styled.nav`
  z-index: 1;
  text-align: center;
  justify-content: center;
  position: fixed;
  background-color: #008000;
  padding: 10px 10px 10px 10px;
  margin: 0;
  width: 100vw;
  bottom: 0;
  color: white;
  text-decoration: none;
`;

const StyledCard = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 0 0 0;
`;
const StyledHeadline = styled.div`
  margin-left: 27px;
  font-size: 12px;
  margin-right: 20px;
`;
const StyledH2 = styled.h2`
  font-weight: normal;
`;
