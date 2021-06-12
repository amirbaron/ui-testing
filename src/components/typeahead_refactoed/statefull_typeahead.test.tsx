import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { StatefullTypeahead } from "./statefull_typeahead";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("StatefullTypeahead tests", () => {
  const movies = ["Final destination", "Star wars"];
  const searchMovieApiStub = (
    value: string,
    caseSensetive = true
  ): Promise<ReadonlyArray<string>> => {
    const normalizedValue = caseSensetive ? value : value.toLowerCase();
    return Promise.resolve(
      movies.filter(
        (m) => caseSensetive? (m.startsWith(normalizedValue) && normalizedValue !== "" ) : (m.toLowerCase().startsWith(normalizedValue) && normalizedValue !== "" )
      )
    );
  };

  beforeEach(() => {});
  it("Renders the queried movie", async () => {
    const searchMovieApi = jest.fn();
    searchMovieApi.mockImplementation(searchMovieApiStub);
    render(<StatefullTypeahead searchMovieApi={searchMovieApi} />);
    const input = screen.getByPlaceholderText("Type movie here");
    await act(async () => {
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "star" } });
    });
    expect(screen.getByText("Star wars")).toBeInTheDocument();
  });
});
