import styled from "styled-components";

export default function TextLengthCounter({ max, counter }) {
  return (
    <CharacterCounter>
      {counter < max && counter >= 0
        ? `${max - counter} Zeichen übrig`
        : "Es sind keine Zeichen mehr übrig - bitte kürze die Beschreibung"}
    </CharacterCounter>
  );
}

const CharacterCounter = styled.p`
  font-size: 10px;
`;
