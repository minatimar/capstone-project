import styled from "styled-components";

export default function Counter({ maxLength, counter }) {
  return (
    <Wrapper>
      {counter < maxLength && counter >= 0 ? (
        <CounterLetters> {maxLength - counter} Zeichen</CounterLetters>
      ) : (
        <CounterLetters>
          keine Zeichen mehr übrig - bitte kürzen{" "}
        </CounterLetters>
      )}
    </Wrapper>
  );
}

const CounterLetters = styled.p`
  font-size: 0.8em;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
