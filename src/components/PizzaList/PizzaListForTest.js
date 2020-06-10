import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1440px;
  }
`;

const ListItem = styled.li`
  background-color: blue;
  width: 280px;
  height: 438px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 354px;
    margin-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    width: 270px;
  }
`;

export default function PizzaListForTest() {
  return (
    <List>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
    </List>
  );
}
