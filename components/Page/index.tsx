import React from "react";
import Head from "next/head";
import { Container, Element } from "./style";
import { Prop } from "./type";

const Page = ({ children, title, header }: Prop) => (
  <Container>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="shortcut icon" href="/favicon/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
      <link rel="shortcut icon" href="/favicon/favicon-96x96.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap"
        rel="stylesheet"
      />
    </Head>
    {header && <h1>{header}</h1>}
    <Element>{children}</Element>
  </Container>
);

export default Page;
