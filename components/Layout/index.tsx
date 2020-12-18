import React from "react";
import Image from "next/image";
import {
  Container,
  Header,
  Content,
  User,
  Search,
  Divider,
  Board,
} from "./style";
import SearchInput from "../SearchInput";

const Layout = () => (
  <Container>
    <Header>
      <Search>
        <Image width="50px" height="50px" src="/logo.svg" />
        <Divider />
        <SearchInput />
      </Search>
      <User>
        <Image width="40px" height="40px" src="/avatar.png" />
        <p>Leonetta Lloyd</p>
      </User>
    </Header>
    <Content>
      <Board>
        <p>Backlog</p>
      </Board>
      <Board>
        <p>Todo</p>
      </Board>
      <Board>
        <p>Done</p>
      </Board>
    </Content>
  </Container>
);

export default Layout;
