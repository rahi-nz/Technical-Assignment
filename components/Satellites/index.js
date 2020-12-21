import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Lists } from "./style";
import { getSatellitesAction } from "../../store/getSatellites/getSatellitesAction";
import { launchedDate } from "../../utils";

const Satellites = () => {
  const dispatch = useDispatch();
  const [satellites, setSatellites] = useState();

  useEffect(() => {
    (async () => {
      const res = await dispatch(getSatellitesAction());
      setSatellites(
        launchedDate(
          res.map((el) => ({
            id: el.id,
            date: el.spaceTrack.LAUNCH_DATE,
          }))
        )
      );
    })();
    }, []); // eslint-disable-line

  return (
    <Container>
      <h3>Satellites</h3>
      <Lists>
        {satellites && satellites.map((el) => <p key={el}>{el}</p>)}
      </Lists>
    </Container>
  );
};

export default Satellites;
