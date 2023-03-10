import GlobalStyle from "@/styles";
import styled from "styled-components";
import userDonations from "../db.json";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import Image from "next/image";
import lifebelt from "../assets/lifebelt.png";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [donations, setDonations] = useLocalStorageState("donations", {
    defaultValue: userDonations,
  });
  const myUserID = "pandabär";
  const router = useRouter();
  function handleDelete(donationID) {
    const updatedList = donations.filter(
      (donations) => donationID !== donations.id
    );
    setDonations(updatedList);
  }

  function handleEditDonation(_editDonationData, _donationId) {
    setDonations(
      donations.map((donationItem) => {
        if (donationItem.id === _donationId) {
          return _editDonationData;
        } else {
          return donationItem;
        }
      })
    );
  }

  function createDonation(newDonationData) {
    setDonations((oldDonations) => [
      {
        ...newDonationData,
        id: crypto.randomUUID(),
        userID: myUserID,
      },
      ...oldDonations,
    ]);
  }

  function handleDummyDonations() {
    setDonations(userDonations);
  }
  return (
    <StyledDiv>
      <Head>
        <title>Essensretter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      {router.pathname !== "/" ? (
        <StyledHeadline>
          <p>D i e&nbsp;&nbsp;E s s e n s r e t t e r&nbsp;&nbsp;</p>
          <Image
            src={lifebelt}
            alt="Essensretter Logo"
            width={30}
            height={30}
          />
        </StyledHeadline>
      ) : null}
      <Component
        handleDelete={handleDelete}
        {...pageProps}
        donations={donations}
        createDonation={createDonation}
        handleDummyDonations={handleDummyDonations}
        myUserID={myUserID}
        handleEditDonation={handleEditDonation}
      />
    </StyledDiv>
  );
}
// const StyledH1 = styled.h1`
//   font-size: 14px;
//   font-weight: 100;
//   padding: 10px;
// `;
const StyledHeadline = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f7fbf5;
  padding: 0 20px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  line-height: 10px;
  border-bottom: 1px solid black;
`;

const StyledDiv = styled.div`
  z-index: -1;
  background-color: #f7fbf5;
`;
