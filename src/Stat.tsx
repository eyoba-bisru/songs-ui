import styled from "styled-components";

const Title = styled.p`
  margin-bottom: 0.5rem;
  font-size: medium;
  font-weight: 500;
  color: #282828;
`;

const Number = styled.p`
  font-size: xx-large;
  font-weight: 500;
  color: #4a4a4a;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: 2px dashed black;
  max-width: fit-content;
`;

type Props = {
  title: string;
  number: number;
};

const Stat = ({ title, number }: Props) => {
  return (
    <Wrapper>
      {" "}
      <Title>{title}</Title>
      <Number>{number}</Number>
    </Wrapper>
  );
};

export default Stat;
