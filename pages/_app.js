import GlobalStyle from "@/styles";
import styled from "styled-components";
import userDonations from "../db.json";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function App({ Component, pageProps }) {
  const [donations, setDonations] = useLocalStorageState("donations", {
    defaultValue: userDonations,
  });
  const myUserID = "pandabär";

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
    <>
      <Head>
        <title>Essensretter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <StyledHeadline>
        <Image src={logo} alt="Essensretter Logo" width={300} height={70} />
      </StyledHeadline>
      <Component
        handleDelete={handleDelete}
        {...pageProps}
        donations={donations}
        createDonation={createDonation}
        handleDummyDonations={handleDummyDonations}
        myUserID={myUserID}
        handleEditDonation={handleEditDonation}
      />
    </>
  );
}
const StyledHeadline = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  background-color: green;
  padding: 0;
  margin: 0;
`;
