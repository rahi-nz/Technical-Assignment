import React from "react";
import createStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Satellites from "./index";
import { launchedDate } from "../../utils";

describe("<Satellites />", () => {
  let rootElement;
  let testRenderer;
  let store;
  let date;

  beforeEach(async () => {
    date = ["starlinks id:5eed770f096e59000698560d launched on June 24th 2019"];
    store = createStore([])({
      satellites: {
        loading: false,
        data: [
          {
            height_km: null,
            id: "5eed770f096e59000698560d",
            latitude: null,
            launch: "5eb87d30ffd86e000604b378",
            longitude: null,
            spaceTrack: {
              APOAPSIS: 159.809,
              ARG_OF_PERICENTER: 120.7278,
              BSTAR: 0.0022139,
              CCSDS_OMM_VERS: "2.0",
              CENTER_NAME: "EARTH",
              CLASSIFICATION_TYPE: "U",
              COMMENT: "GENERATED VIA SPACE-TRACK.ORG API",
              COUNTRY_CODE: "US",
              CREATION_DATE: "2020-10-13T04:16:08",
              DECAYED: 1,
              DECAY_DATE: "2020-10-13",
              ECCENTRICITY: 0.0003711,
              ELEMENT_SET_NO: 999,
              EPHEMERIS_TYPE: 0,
              EPOCH: "2020-10-13T02:56:59.566560",
              FILE: 2850561,
              GP_ID: 163365918,
              INCLINATION: 52.9708,
              LAUNCH_DATE: "2019-05-24",
              MEAN_ANOMALY: 242.0157,
              MEAN_ELEMENT_THEORY: "SGP4",
              MEAN_MOTION: 16.43170483,
              MEAN_MOTION_DDOT: 0.000012426,
              MEAN_MOTION_DOT: 0.47180237,
              NORAD_CAT_ID: 44244,
              OBJECT_ID: "2019-029K",
              OBJECT_NAME: "STARLINK-30",
              OBJECT_TYPE: "PAYLOAD",
              ORIGINATOR: "18 SPCS",
              PERIAPSIS: 154.958,
              PERIOD: 87.635,
              RA_OF_ASC_NODE: 332.0356,
              RCS_SIZE: "LARGE",
              REF_FRAME: "TEME",
              REV_AT_EPOCH: 7775,
              SEMIMAJOR_AXIS: 6535.519,
              SITE: "AFETR",
              TIME_SYSTEM: "UTC",
              TLE_LINE0: "0 STARLINK-30",
              TLE_LINE1:
                "1 44244U 19029K   20287.12291165  .47180237  12426-4  22139-2 0  9995",
              TLE_LINE2:
                "2 44244  52.9708 332.0356 0003711 120.7278 242.0157 16.43170483 77756",
              __proto__: Object,
              velocity_kms: null,
            },
            version: "v0.9",
          },
        ],
        error: false,
      },
    });
    store.dispatch = jest.fn();

    // eslint-disable-next-line react/display-name
    rootElement = () => (
      <Provider store={store}>
        <Satellites />
      </Provider>
    );

    testRenderer = renderer.create(rootElement());
  });

  it("Should return launch date", () => {
    expect(
      launchedDate([{ id: "5eed770f096e59000698560d", date: "2019-05-24" }])
    ).toEqual(date);
  });

  it("Should render correctly", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
