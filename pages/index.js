import styled from "styled-components";
import logoHomepage from "../assets/logoHomepage.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <StyledDiv>
      <StyledImage>
        <Image
          src={logoHomepage}
          alt="Essensretter Willkommen Logo"
          width={300}
          height={300}
        />
      </StyledImage>
      <StyledSection>
        <StyledButton as="a" href={"/myDonations"}>
          Ich möchte spenden!
        </StyledButton>
        <StyledButton as="a" href={"/allDonations"}>
          Ich möchte retten!
        </StyledButton>
      </StyledSection>
    </StyledDiv>
  );
}

const StyledButton = styled.button`
  border-radius: 8px;
  gap: 5px;
  margin: 10px;
  padding: 20px;
  border: solid green 2px;
  background-color: green;
`;
const StyledSection = styled.section`
  display: flex;
`;
const StyledImage = styled.div`
  top: 0;
  text-align: center;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: white;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
