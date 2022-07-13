import { render, screen } from "@testing-library/react";

import App from "../src/App";

describe("pruebas en <App />", () => {
  test("debe de estar vació el valor del input", () => {
    render(<App />);
    expect(screen.getByRole("textbox").value).toBe("");
  });

  test("debe de renderizar los gifs por defecto", () => {
    render(<App />);

    expect(screen.getByText("naruto"));
  });
});
