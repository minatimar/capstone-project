import GlobalStyle from "@/styles";
import styled from "styled-components";
import userDonations from "../db.json";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [donations, setDonations] = useLocalStorageState("donations", {
    defaultValue: [...userDonations],
  });

  function handleDelete(donationID) {
    const deletedList = donations.filter(
      (donations) => donationID !== donations.id
    );
  }

  function createDonation(newDonation) {
    setDonations((oldDonations) => [
      {
        ...newDonation,
        id: crypto.randomUUID(),
      },
      ...oldDonations,
    ]);
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
      <StyledHeadline>Die Essensretter</StyledHeadline>
      <Component
        handleDelete={handleDelete}
        {...pageProps}
        donations={donations}
        createDonation={createDonation}
      />
    </>
  );
}
const StyledHeadline = styled.h1`
  z-index: 1;
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  background-color: pink;
  padding: 0;
  margin: 0;
`;
