import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #F08080;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Inconsolata;
`;

const Announcement = () => {
  return <Container>Super Deal!! Free Shipping on Orders Above $15</Container>;
};

export default Announcement;
