const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  
  it("returns Yes when passed true", () => {
    expect(booleanToWord(true)).toBe('Yes')
    expect(booleanToWord(false)).toBe('No')
  });





});
