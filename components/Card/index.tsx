import React from "react";
import { ThemeProvider } from "styled-components";
import { Container, Title, Description, Details, Name, Date } from "./style";
import { Prop } from "./type";

const Card = ({
  title,
  description,
  name,
  date,
  color,
  isPast,
  state,
}: Prop) => {
  const dateColor = () => {
    if (state === "Done") {
      return "#d4d8df";
    }
    switch (isPast) {
      case "Yes":
        return "#f25464";
      case "No":
        return "#5fdc7d";
      default:
        return "#9d6cff";
    }
  };

  const theme = {
    bgColor: color,
    color: dateColor(),
  };

  return (
    <ThemeProvider theme={theme}>
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
