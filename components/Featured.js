import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const Wrapper = styled.div`
  display: grid;
  gird-template-columns: 1fr 1fr;
  gap: 40px;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <div>
            <Title>Pro anywhere</Title>
            <Desc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              ea temporibus hic non optio placeat recusandae, sapiente maxime?
              Saepe provident eius repellendus sed eum adipisci eligendi illo
              incidunt recusandae repudiandae?
            </Desc>
          </div>
          <div></div>
        </Wrapper>
      </Center>
    </Bg>
  );
}
