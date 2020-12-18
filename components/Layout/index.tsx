import React from "react";
import Image from "next/image";
import { Container, Header, Content, User } from "./style";

const Layout = () => (
  <Container>
    <Header>
      <Image width="50px" height="50px" src="/logo.svg" />
      <User>
        <Image width="40px" height="40px" src="/avatar.png" />
        <p>Leonetta Lloyd</p>
      </User>
    </Header>
    <Content />
  </Container>
);

export default Layout;
