import React from "react";

import { render } from "@testing-library/react";

import CardTitle from "../components/CardTitle";

describe("testando component CardTitle", () => {
  test("testando se o texto passado na props é rederizado", async () => {
    const title = "home";
    const { getByText } = render(<CardTitle title={title} />);
    getByText(title);
  });
});
