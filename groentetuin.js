const corn = {
  name: "corn",
  yield: 30,
  factors: {
    sun: {
      low: -50,
      medium: 0,
      high: 50,
    },
  },
};

const environment_factors = {
  sun: "low",
};

// const isNotNull = (str) => str !== null;

const get_yield_for_plant = () => 30;

const get_yield_for_crop = () => 30;
const get_total_yield = () => 23;

const get_profit_for_crop = () => 100;

const get_total_profit = () => 1000;

module.exports = {
  get_yield_for_plant,
  get_yield_for_crop,
  get_total_yield,
};
