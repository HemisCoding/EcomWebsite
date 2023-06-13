import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';


const Container = styled.div`
  height: 60px;
  margin-bottom: 10px;
  ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  align-items: center;
  display: flex;
  margin-left: 25px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({ fontSize: "24px" })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{color:"gray", fontSize: '16px'}}></Search>
          </SearchContainer>
        </Left>
        <Center><Logo>Hemizzz.</Logo></Center>
        <Right>
          <Link to='/register'>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to = 'login'>
            <MenuItem>Sign In</MenuItem>
          </Link>
          <MenuItem>
          <Link to='cart'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
