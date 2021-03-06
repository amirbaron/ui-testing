import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StatelessMoviesSearch } from "./stateless_movies_search";
import { act } from "react-dom/test-utils";
import { StatefullMoviesSearch } from "./statefull_movies_search";

beforeEach(() => {
  jest.resetAllMocks();
});
describe("StatefullMoviesSearch tests", () => {
  beforeEach(() => {});
  it("Renders the given suggested movies", () => {
    render(
      <StatelessMoviesSearch
        onChange={(value: string) => {}}
        currentSuggestedMovies={["Movie1", "Movie2"]}
      />
    );
    expect(screen.getByText("Movies:")).toBeInTheDocument();
    expect(screen.getByText("Movie1")).toBeInTheDocument();
    expect(screen.getByText("Movie2")).toBeInTheDocument();
  });

  it("Does not render movies when the search results are empty", async () => {
    render(
      <StatelessMoviesSearch
        onChange={(value: string) => {}}
        currentSuggestedMovies={[]}
      />
    );
    expect(screen.queryAllByText("Movies:")).toHaveLength(0);
  });

  it("Renders the typed query in the input and calls onChange", async () => {
    const onChange = jest.fn();
    render(
      <StatelessMoviesSearch
        onChange={onChange}
        currentSuggestedMovies={[]}
      />
    );
    const input = screen.getByPlaceholderText("Type movie here");
    await act(async () => {
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "typed query" } });
    });
    expect(screen.getByDisplayValue("typed query")).toBeInTheDocument();
    expect(
      screen.getByDisplayValue((content, element) => {
        console.log(element?.tagName, content);
        return (
          element?.tagName.toLowerCase() === "input" && content == "typed query"
        );
      })
    ).toBeInTheDocument();
    expect(onChange).toHaveBeenCalled();
  });
});
