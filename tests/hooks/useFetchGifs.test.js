const { renderHook, waitFor } = require("@testing-library/react");

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("pruebas en useFetchGifs()", () => {
  test("debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Naruto"));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Naruto"));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
