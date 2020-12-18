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
    </Head>
    {header && <h1>{header}</h1>}
    <Element>{children}</Element>
  </Container>
);

export default Page;
