import styled from "styled-components";

export default function Counter({ max, counter }) {
  return (
    <>
      {counter < max && counter >= 0 ? (
        <CharacterCounter> {max - counter} Zeichen</CharacterCounter>
      ) : (
        <CharacterCounter>
          Es sind keine Zeichen mehr übrig - bitte kürze die Beschreibung
        </CharacterCounter>
      )}
    </>
  );
}

const CharacterCounter = styled.p`
  font-size: 10px;
`;
