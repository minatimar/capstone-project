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

  function createDonation(newDonation) {
    // newDonation= data von AddDonation also die neuen daten aus dem formular
    setDonations((oldDonations) => [
      {
        ...newDonation,
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
        <Image src={logo} alt="logo" width={300} height={70} />
      </StyledHeadline>
      <Component
        handleDelete={handleDelete}
        {...pageProps}
        donations={donations}
        createDonation={createDonation}
        handleDummyDonations={handleDummyDonations}
        myUserID={myUserID}
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
