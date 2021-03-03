import React from "react";

import { render } from "@testing-library/react";

import Header from "../components/Header";

describe("testando component header", () => {
  test("testando se o texto passado na props é rederizado", async () => {
    const brand = "GoPress";
    const { getByText } = render(<Header brand={brand} />);
    getByText(brand);
  });
});
