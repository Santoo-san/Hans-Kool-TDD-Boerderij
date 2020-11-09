const functions = require("./functions");

test("Adds 2+2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2+2 not to equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("User should be Hans Kool object", () => {
  expect(functions.createUser()).toEqual({
    firstname: "Hans",
    lastname: "Kool",
  });
});

test("Should be under 1600", () => {
  const load1 = 700;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

//Regex

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("There is no I in team", () => {
  expect("teami").not.toMatch(/I/);
});

test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//working with asyc data
//optie a
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

//optie b
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
