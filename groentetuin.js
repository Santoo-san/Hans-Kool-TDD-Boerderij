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

const yieldMultiplier = 1;

const get_yield_for_plant = (crop) => {
  return crop.yield * yieldMultiplier;
};

const get_yield_for_crop = (input) => {
  return input.crop.yield * input.num_crops;
};
const get_total_yield = ({ crops }) => {
  const cropTotal = crops.map((item) => {
    return item.crop.yield * item.num_crops;
  });
  return cropTotal.reduce((a, b) => a + b, 0);
};

const get_profit_for_crop = () => 100;

const get_total_profit = () => 1000;

module.exports = {
  get_yield_for_plant,
  get_yield_for_crop,
  get_total_yield,
};
