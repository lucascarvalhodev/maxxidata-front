import React from "react";

import { render } from "@testing-library/react";

import CardInfo from "../components/CardInfo";

describe("testando component CardInfo", () => {
  test("testando se o texto passado na props é rederizado", async () => {
    const title = "home";
    const description = "desc";
    const { getByText } = render(
      <CardInfo title={title} description={description} />
    );
    getByText(title);
    getByText(description);
  });

  test("testando se o texto passado na props é rederizado", async () => {
    const title = "home";
    const description = "desc";
    const { getByText } = render(
      <CardInfo title={title} description={description} loading={true} />
    );
    getByText(title);
    getByText("---");
  });
});
