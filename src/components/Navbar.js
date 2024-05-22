import { Badge } from "@material-ui/core";
import { FavoriteBorderOutlined, Search, ShoppingBasket, ShoppingCartOutlined} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 50px;
  border-radius: 50px;
  border-color:black;
  padding: 6px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-family: Arial, sans-serif;
  padding: 10px;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-family: Merriweathe;
  color:#008080;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1 ;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
width: 100px;
height: 45px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: Arial, sans-serif;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ASPER</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search on Asper" />
            <Search style={{ color: "black", fontSize: 22 }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <FavoriteBorderOutlined></FavoriteBorderOutlined>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
