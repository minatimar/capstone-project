import styled from "styled-components";
import MoreInfoButton from "@/components/ToggleButton";

export default function HomePage({ donations }) {
  return (
    <>
      <StyledList>
        <MoreInfoButton />
      </StyledList>
    </>
  );
}
const StyledCard = styled.li`
  // z-index: 1;
  border: 2px solid black;

  text-align: center;
  width: 100%;
  padding: 10px;
  margin: 10px;
`;
const StyledList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
