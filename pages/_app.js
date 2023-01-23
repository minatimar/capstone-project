import GlobalStyle from "@/styles";
import Head from "next/head";
import styled from "styled-components";
import Donations from "../db.json";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [donations, setDonations] = useLocalStorageState("donations", {
    defaultValue: [...Donations],
  });
  function createDonation(donation) {
    setDonations([...donations, donation]);
  }
  return (
    <>
      <GlobalStyle />
      <StyledHeadline>Die Essensretter</StyledHeadline>
      <Component
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
  background-color: green;
  padding: 0;
  margin: 0;
`;
