export const question = {
  console: true,
  tests: true,
  preview: false,
  code: `/* Return the string in uppercase */
function shout(string) {
  return string.toUpperCase();
}

/* Print the string in uppercase */
function logShout(string) {
  console.log(string.toUpperCase());
}

export  { shout, logShout }; `,
  test: `import { shout, logShout } from './index.js';
  
describe("shout(string)", function () {
  it("receives one argument and returns it in all caps", function () {
    expect(shout("hello")).toEqual("HELLO");
  });
});

describe("logShout(string)", function () {
  it("takes a string argument and logs it in all caps using console.log()", function () {
    const logSpy = jest.spyOn(global.console, "log");

    logShout("hello");

    expect(logSpy).toHaveBeenCalledWith("HELLO");

    logSpy.mockRestore();
  });
});`,
};

export default question;
