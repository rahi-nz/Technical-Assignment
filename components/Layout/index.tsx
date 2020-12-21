import React from "react";
import Image from "next/image";
import { content } from "../../webConfig";
import {
  Container,
  Header,
  Content,
  User,
  Search,
  Divider,
  Board,
  Title,
  TitleContainer,
  BoardContainer,
} from "./style";
import SearchInput from "../SearchInput";
import Card from "../Card";

const Layout = () => (
  <Container>
    <Header>
      <Search>
        <Image width="40px" height="40px" src="/logo.svg" />
        <Divider />
        <SearchInput />
      </Search>
      <User>
        <Image width="30px" height="30px" src="/avatar.png" />
        <p>Leonetta Lloyd</p>
      </User>
    </Header>
    <Content>
      <TitleContainer>
        <Title>Backlog</Title>
        <Title>Todo</Title>
        <Title>Done</Title>
      </TitleContainer>
      <BoardContainer>
        <Board>
          {content
            .filter((el) => el.status === "backlog")
            .map((el) => (
              <Card
                key={el.title}
                description={el.description}
                title={el.title}
                color={el.color}
                name={el.name}
                date={el.date}
                isPast={el.isPast}
                state="Backlog"
              />
            ))}
        </Board>
        <Board>
          {content
            .filter((el) => el.status === "todo")
            .map((el) => (
              <Card
                key={el.title}
                description={el.description}
                title={el.title}
                color={el.color}
                name={el.name}
                date={el.date}
                isPast={el.isPast}
                state="Todo"
              />
            ))}
        </Board>
        <Board>
          {content
            .filter((el) => el.status === "done")
            .map((el) => (
              <Card
                key={el.title}
                description={el.description}
                title={el.title}
                color={el.color}
                name={el.name}
                date={el.date}
                isPast={el.isPast}
                state="Done"
              />
            ))}
        </Board>
      </BoardContainer>
    </Content>
  </Container>
);

export default Layout;
