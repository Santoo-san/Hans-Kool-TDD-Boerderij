const {
  get_costs_for_crop,
  get_revenue_for_crop,
  get_profit_for_crop,
  get_profit_for_crop_environment,
  get_yield_for_plant,
  get_adjusted_yield_for_plant,
  get_yield_for_crop,
  get_yield_for_crop_environment,
  get_total_yield,
  get_total_profit,
  get_total_profit_environment,
} = require("./groentetuin");

// general data
const corn = {
  name: "corn",
  yield: 30,
  cost: 0.5,
  sales_price: 2,
  factors: {
    sun: {
      low: -50,
      medium: 0,
      high: 50,
    },
    wind: {
      low: 0,
      medium: -30,
      high: -60,
    },
    soiltype: {
      clay: 0,
      sand: -40,
      compost: 40,
    },
  },
};
const pumpkin = {
  name: "pumpkin",
  yield: 4,
  cost: 3,
  sales_price: 4,
  factors: {
    sun: {
      low: -10,
      medium: 0,
      high: 10,
    },
    wind: {
      low: 0,
      medium: -10,
      high: -20,
    },
    soiltype: {
      clay: 0,
      sand: -40,
      compost: 40,
    },
  },
};

const environment_factors = {
  sun: "low",
};
const environment_factors2 = {
  sun: "low",
  wind: "high",
};

const environment_factors3 = {
  sun: "medium",
  wind: "low",
};

const input = {
  crop: corn,
  num_crops: 10,
};

// Task 0, given tests
describe("get_yield_for_plant", () => {
  test("Get yield for plant with no environment factors", () => {
    expect(get_yield_for_plant(corn)).toBe(30);
  });

  // Task 5
  test("Get yield for plant with environment factor sun", () => {
    expect(get_adjusted_yield_for_plant(corn, environment_factors)).toBe(15);
  });
  // Task 6
  test("Get yield for plant with environment factor sun and wind", () => {
    expect(get_adjusted_yield_for_plant(corn, environment_factors2)).toBe(6);
  });
  // Task 6
  test("Get yield for plant with environment factor sun and wind 'no influence'", () => {
    expect(get_adjusted_yield_for_plant(corn, environment_factors3)).toBe(30);
  });
  // Task 7
  test("Get yield for plant with environment factor sun and wind ignore soiltype", () => {
    expect(get_adjusted_yield_for_plant(corn, environment_factors2)).toBe(6);
  });
});

describe("get_yield_for_crop", () => {
  // Task 0, given tests
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(get_yield_for_crop(input)).toBe(30);
  });
  // Task 8
  test("Get yield for crop, with environment factors", () => {
    expect(get_yield_for_crop_environment(input, environment_factors3)).toBe(
      300
    );
  });
  test("Get yield for crop, with environment factors", () => {
    expect(get_yield_for_crop_environment(input, environment_factors2)).toBe(
      60
    );
  });
});

// Task 0, given tests
describe("get_total_yield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, num_crops: 5 },
      { crop: pumpkin, num_crops: 2 },
    ];
    expect(get_total_yield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, num_crops: 0 }];
    expect(get_total_yield({ crops })).toBe(0);
  });
});

// Task 1
describe("get_cost_for_crop", () => {
  test("Get cost for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 0.5,
    };
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(get_costs_for_crop(input)).toBe(15);
  });
});

// Task 2
describe("get_revenue_for_crop", () => {
  test("Get revenue for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 0.5,
      sales_price: 2,
    };
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(get_revenue_for_crop(input)).toBe(60);
  });
});

// Task 3
describe("get_profit_for_crop", () => {
  test("Get profit for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 0.5,
      sales_price: 2,
    };
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(get_profit_for_crop(input)).toBe(45);
  });
});

// Task 4
describe("get_total_profit", () => {
  test("Calculate total profit with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 0.5,
      sales_price: 2,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      cost: 3,
      sales_price: 4,
    };
    const crops = [
      { crop: corn, num_crops: 10 },
      { crop: pumpkin, num_crops: 5 },
    ];
    expect(get_total_profit({ crops })).toBe(65);
  });
});

// Task 9
describe("get_profit_for_crop, with environment factors", () => {
  test("Get profit for crop, with environment factors 'no influence'", () => {
    expect(get_profit_for_crop_environment(input, environment_factors3)).toBe(
      450
    );
  });
  test("Get profit for crop, with environment factors", () => {
    expect(get_profit_for_crop_environment(input, environment_factors2)).toBe(
      90
    );
  });
});

// Task 10
describe("get_total_profit, with environment factors", () => {
  const crops = [
    { crop: corn, num_crops: 10 },
    { crop: pumpkin, num_crops: 20 },
  ];

  test("Get total profit, with environment factors 'no influence'", () => {
    expect(get_total_profit_environment({ crops }, environment_factors3)).toBe(
      530
    );
  });
  test("Get total profit, with environment factors", () => {
    expect(
      get_total_profit_environment({ crops }, environment_factors2)
    ).toEqual(148);
  });
});
