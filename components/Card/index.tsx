import React from "react";
import { Container, Title, Description, Details, Name, Date } from "./style";
import { Prop } from "./type";

const Card = ({ title, description, name, date }: Prop) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Details>
      <Name>{name}</Name>
      {date && <Date>{date}</Date>}
    </Details>
  </Container>
);

export default Card;
