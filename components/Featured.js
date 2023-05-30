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
  img {
    max-width: 100%;
  }
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
          <div>
            <img
              src="https://cdn.imgbin.com/11/16/24/imgbin-apple-macbook-pro-15-2017-laptop-macintosh-macbook-pro-13-inch-macbook-1dcMs3CXtLWCh5z0ij7GPtDnW.jpg"
              alt=""
            />
          </div>
        </Wrapper>
      </Center>
    </Bg>
  );
}
