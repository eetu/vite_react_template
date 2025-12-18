import { expect } from "vitest";
import { render } from "vitest-browser-react";

import App from "../App.tsx";

describe("App", () => {
  it("renders hello world", async () => {
    const screen = await render(<App />);

    await expect.element(screen.getByText("Hello World!")).toBeVisible();
  });
});
