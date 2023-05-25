import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';

const Container = styled.div`
  height: 60px;
  margin-bottom: 10px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
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
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  align-items: center;
  display: flex;
  margin-left: 25px;
`

const Input = styled.input`
  border: none;
`

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
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
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
