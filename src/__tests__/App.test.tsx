import { render } from "@testing-library/react";

import App from "../App.tsx";

describe("App", () => {
  it("renders hello world", () => {
    const result = render(<App />);

    expect(result.findByText("Hello World!")).toBe;
  });
});
