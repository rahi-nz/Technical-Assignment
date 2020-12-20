export const failedLaunches = (name, launches) => ({
  launchpad: name,
  all_failures: launches
    .filter((el) => el.data.success === false)
    .map((el) => ({
      name: el.data.name,
      failures: el.data.failures[0].reason,
    })),
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const launchedDate = (data) => {
  const res = data.map((el) => {
    const arr = el.date.split("-");
    return `starlinks id:${el.id} launched on ${
      months[Number(arr[1])]
    } ${Number(arr[2])}th ${Number(arr[0])}`;
  });
  return res;
};
