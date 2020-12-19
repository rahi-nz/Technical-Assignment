import React from "react";
import { ThemeProvider } from "styled-components";
import { Container, Title, Description, Details, Name, Date } from "./style";
import { Prop } from "./type";

const Card = ({ title, description, name, date, color }: Prop) => {
  const bgTheme = { bgColor: color };
  const dateColor = { bgColor: color };

  return (
    <ThemeProvider theme={bgTheme}>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Details>
          <Name>{name}</Name>
          {date && <Date>{date}</Date>}
        </Details>
      </Container>
    </ThemeProvider>
  );
};

export default Card;
