const yieldMultiplier = (crop, environment_factors) => {
  const sunPercentage = crop.factors.sun[environment_factors.sun] || 0;
  const windPercentage = crop.factors.wind[environment_factors.wind] || 0;
  const percentages = [sunPercentage, windPercentage];
  multiplyFactors = percentages.map((percentage) => percentage / 100 + 1);
  return multiplyFactors.reduce(
    (acc, curr) => acc * curr,
    get_yield_for_plant(crop)
  );
};

const get_adjusted_yield_for_plant = (crop, environment) => {
  const sunPercentage = crop.factors.sun[environment.sun] || 0;
  const windPercentage = crop.factors.wind[environment.wind] || 0;
  const percentages = [sunPercentage, windPercentage];
  multiplyFactors = percentages.map((percentage) => percentage / 100 + 1);
  return multiplyFactors.reduce(
    (acc, curr) => acc * curr,
    get_yield_for_plant(crop)
  );
};

const get_yield_for_plant = (crop) => {
  return crop.yield;
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

const get_profit_for_crop = (input) => {
  return get_revenue_for_crop(input) - get_costs_for_crop(input);
};

const get_total_profit = ({ crops }) => {
  const cropTotal = crops.map((item) => {
    return get_revenue_for_crop(item) - get_costs_for_crop(item);
  });
  return cropTotal.reduce((a, b) => a + b, 0);
};

const get_costs_for_crop = (input) => {
  return get_yield_for_crop(input) * input.crop.cost;
};
const get_revenue_for_crop = (input) => {
  return get_yield_for_crop(input) * input.crop.sales_price;
};

module.exports = {
  get_costs_for_crop,
  get_revenue_for_crop,
  get_profit_for_crop,
  get_yield_for_plant,
  get_adjusted_yield_for_plant,
  get_yield_for_crop,
  get_total_yield,
  get_total_profit,
};
