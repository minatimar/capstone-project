import styled from "styled-components";
import myLogo from "../assets/myLogo.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <Wrapper>
      <StyledImage>
        <Image src={myLogo} alt="Essensretter Logo" width={450} height={450} />
      </StyledImage>
      <StyledSection>
        <StyledDonationButton as="a" href={"/myDonations"}>
          Ich möchte spenden!
        </StyledDonationButton>
        <StyledSaveButton as="a" href={"/allDonations"}>
          Ich möchte retten!
        </StyledSaveButton>
      </StyledSection>
    </Wrapper>
  );
}

const StyledDonationButton = styled.button`
  border-radius: 50px;
  gap: 5px;
  margin: 10px;
  padding: 20px;
  background-color: #008000;
  text-decoration: none;
  color: white;
  width: 80%;
  text-align: center;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
`;
const StyledSaveButton = styled.button`
  border-radius: 50px;
  gap: 5px;
  margin: 10px;
  padding: 20px;
  /* border: solid green 2px; */
  background-color: #008000;
  text-decoration: none;
  color: white;
  text-align: center;
  width: 80%;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  background-color: #f7fbf5;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;
