import React from 'react'
import styled from "styled-components"
import { categories } from "../data"
import Categoriesitem from './Categoriesitem';
import { mobile } from "../responsive";



const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <Categoriesitem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories
