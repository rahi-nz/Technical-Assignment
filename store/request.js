const { create } = require("apisauce");

const baseURL = "https://api.spacexdata.com/v4";

// create main request configs
const request = (() =>
  create({
    baseURL,
  }))();

module.exports = {
  request,
  baseURL,
};
