import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Lists } from "./style";
import { getSatellitesAction } from "../../store/getSatellites/getSatellitesAction";
import { launchedDate } from "../../utils";

const Satellites = () => {
  const dispatch = useDispatch();
  const [satellites, setSatellites] = useState();
  const satellitesList = useSelector((state) => state.satellites.data);

  useEffect(() => {
    (async () => {
      await dispatch(getSatellitesAction());
    })();
    }, []); // eslint-disable-line

  useEffect(() => {
    setSatellites(
      launchedDate(
        satellitesList.map((el) => ({
          id: el.id,
          date: el.spaceTrack.LAUNCH_DATE,
        }))
      )
    );
    }, [satellitesList]); // eslint-disable-line

  console.log("satellites", satellites);
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
