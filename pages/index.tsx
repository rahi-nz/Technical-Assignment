import Link from "next/link";
import React from "react";
import Page from "../components/Page";

const Index = () => (
  <Page title="This is HomePage" header="Assignment">
    <ul>
      <li>
        <Link href="/assignment-1">
          <a>Assignment1</a>
        </Link>
      </li>
      <li>
        <Link href="/assignment-2">
          <a>Assignment2</a>
        </Link>
      </li>
    </ul>
  </Page>
);

export default Index;
