import React from "react";
import Image from "next/image";
import { Container } from "./style";

const SearchInput = () => (
  <Container>
    <Image width="40px" height="40px" src="/search.svg" />
    <input placeholder="Search for ..." />
  </Container>
);

export default SearchInput;
