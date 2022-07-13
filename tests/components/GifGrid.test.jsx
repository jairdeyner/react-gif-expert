import { render, screen } from "@testing-library/react";

import { GifGrid } from "../../src/components/GifGrid";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("pruebas en <GifGrid />", () => {
  const category = "Naruto";

  test("debe mostrar el loading iniciarlmente", () => {
    useFetchGifs.mockReturnValue({ gifs: [], isLoading: true });

    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de ostrar items cuando se cargan las imágenes desde el useFetchGifs", () => {
    const gifs = [
      {
        id: "ads",
        title: "Goku",
        url: "https://goku.jpg/",
      },
      {
        id: "121",
        title: "Naruto",
        url: "https://naruto.jpg/",
      },
    ];
    useFetchGifs.mockReturnValue({ gifs, isLoading: false });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
