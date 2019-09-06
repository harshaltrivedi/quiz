import React from "react";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

function Hello(props) {
  return <h1> {props.now}</h1>;
}

describe("testing", () => {
  let result;
  beforeAll(() => {
    result = Hello({ now: "Hiii" });
  });

  it("return a value", () => {
    expect(result).not.toBeNull();
  });

  it("is heading 1", () => {
    expect(result.type).toBe("h1");
  });
});
