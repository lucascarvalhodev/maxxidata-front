import React from "react";

import { render } from "@testing-library/react";

import Footer from "../components/Footer";

describe("testando component footer", () => {
  test("testando se o texto passado na props é rederizado", async () => {
    const brand = "GoPress";
    const { getByText } = render(<Footer brand={brand} />);
    getByText(`All rights reserved to ©${brand}`);
  });
});
