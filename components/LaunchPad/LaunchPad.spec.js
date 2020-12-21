import React from "react";
import createStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import LaunchPad from "./index";
import { failedLaunches } from "../../utils";

describe("<LaunchPad />", () => {
  let rootElement;
  let testRenderer;
  let store;
  let data;
  let result;

  beforeEach(async () => {
    result = {
      launchpad: "Kwajalein Atoll",
      all_failures: [
        {
          name: "FalconSat",
          failures: "merlin engine failure",
        },
      ],
    };
    data = [
      {
        config: {},
        data: {
          auto_update: true,
          capsules: [],
          cores: [{}],
          crew: [],
          date_local: "2006-03-25T10:30:00+12:00",
          date_precision: "hour",
          date_unix: 1143239400,
          date_utc: "2006-03-24T22:30:00.000Z",
          details: "Engine failure at 33 seconds and loss of vehicle",
          failures: [
            {
              altitude: null,
              reason: "merlin engine failure",
              time: 33,
            },
          ],
          fairings: {
            reused: false,
            recovery_attempt: false,
            recovered: false,
            ships: Array(0),
          },
          flight_number: 1,
          id: "5eb87cd9ffd86e000604b32a",
          launchpad: "5e9e4502f5090995de566f86",
          links: {},
          name: "FalconSat",
          net: false,
          payloads: ["5eb0e4b5b6c3bb0006eeb1e1"],
          rocket: "5e9d0d95eda69955f709d1eb",
          ships: [],
          static_fire_date_unix: 1142553600,
          static_fire_date_utc: "2006-03-17T00:00:00.000Z",
          success: false,
          tbd: false,
          upcoming: false,
          window: 0,
        },
        duration: 538,
        headers: {},
        ok: true,
        originalError: null,
        problem: null,
        status: 200,
      },
    ];
    store = createStore([])({
      satellites: {
        loading: false,
        data: [],
        error: false,
      },
    });
    store.dispatch = jest.fn();

    rootElement = () => (
      <Provider store={store}>
        <LaunchPad />
      </Provider>
    );

    testRenderer = renderer.create(rootElement());
  });

  it("Should return failed Launches", () => {
    expect(failedLaunches("Kwajalein Atoll", data)).toEqual(result);
  });

  it("Should render correctly", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
