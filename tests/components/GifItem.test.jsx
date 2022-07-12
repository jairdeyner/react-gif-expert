import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test en <GifItem />", () => {
  const gif = {
    id: "2",
    title: "Naruto",
    url: "https://naruto.png/",
  };

  test("debe hacer match snapshot", () => {
    const { container } = render(<GifItem gif={gif} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT inidcado", () => {
    render(<GifItem gif={gif} />);
    // screen.debug();

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(gif.url);
    expect(alt).toBe(gif.title);
  });

  test("debe de mostrar el título en el componente", () => {
    render(<GifItem gif={gif} />);

    expect(screen.getByText(gif.title)).toBeTruthy();
  });
});
