import { joinPaths } from "./joinPaths";

describe("joinPaths()", () => {
  test("works with forward slash", () => {
    const delimiter = "/";
    const inputs = ["admin", "characters"];

    const output = joinPaths(delimiter, inputs);
    expect(output).toBe("admin/characters");
  });

  test("works with forward slash and has delimiter", () => {
    const delimiter = "/";
    const inputs = ["admin/", "characters"];

    const output = joinPaths(delimiter, inputs);
    expect(output).toBe("admin/characters");
  });

  test("multi-character delimiter", () => {
    const delimiter = "||";
    const inputs: string[] = ["admin", "characters"];

    const output = joinPaths(delimiter, inputs);
    expect(output).toBe("admin||characters");
  });

  test("multi-character delimiter and has delimiter", () => {
    const delimiter = "||";
    const inputs: string[] = ["admin||", "characters"];

    const output = joinPaths(delimiter, inputs);
    expect(output).toBe("admin||characters");
  });

  test("empty delimiter", () => {
    const delimiter = "";
    const inputs: string[] = ["admin", "characters"];

    const output = joinPaths(delimiter, inputs);
    expect(output).toBe("admincharacters");
  });

  test("empty input", () => {
    const delimiter = "/";
    const inputs: string[] = [];

    const output = joinPaths(delimiter, inputs);
    expect(output).toBe("");
  });

  test("rest params overload", () => {
    const output = joinPaths("/", "admin", "characters");
    expect(output).toBe("admin/characters");
  });
});
