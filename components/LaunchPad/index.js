import React, { useEffect, useState } from "react";
import { request } from "../../store/request";
import { getLaunchpad, getLaunches } from "../../resources/Api";
import { failedLaunches } from "../../utils";
import { launchpadID } from "../../webConfig";
import { Container, Lists, Title } from "./style";

const LaunchPad = () => {
  const [failed, setFailed] = useState();
  const getLaunchesData = async (value) =>
    Promise.all(value.map((item) => request.get(getLaunches(item))));

  useEffect(() => {
    (async () => {
      const response = await request.get(getLaunchpad(launchpadID));
      if (response.ok) {
        const launches = await getLaunchesData(response.data.launches);
        const failedLaunch = failedLaunches(response.data.name, launches);
        setFailed(failedLaunch);
      }
    })();
    }, []); // eslint-disable-line

  return (
    <Container>
      <h3>FailedLaunches</h3>
      {failed && (
        <Lists>
          <Title>{failed?.name}</Title>
          {failed?.all_failures.map((el) => (
            <ul key={el.name}>
              <li>name: {el.name}</li>
              <li>reason: {el.failures}</li>
            </ul>
          ))}
        </Lists>
      )}
    </Container>
  );
};

export default LaunchPad;
