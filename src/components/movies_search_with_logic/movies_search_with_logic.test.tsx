import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MoviesSearchWithLogic } from "./movies_search_with_logic";
import * as Api from "../../api";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  jest.resetAllMocks();
});
describe("MoviesSearchWithLogic tests with mocked database", () => {
  let searchInDbSpy = jest.spyOn(Api, "searchMovieApi");
  beforeEach(() => {
    searchInDbSpy.mockRestore();
    searchInDbSpy = jest.spyOn(Api, "searchMovieApi");
  });
  it("Renders movies when searching for a movie and database returns results", async () => {
    render(<MoviesSearchWithLogic />);
    // how do we know which movies exist ?
    // to workaround we can mock the implementation of the Database
    searchInDbSpy.mockImplementation(() =>
      Promise.resolve(["Movie1", "Movie2"])
    );
    const input = screen.getByPlaceholderText("Type movie here");
    await act(async () => {
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "some movie" } });
    });
    expect(screen.getByText("Movies:")).toBeInTheDocument();
    expect(screen.getByText("Movie1")).toBeInTheDocument();
    expect(screen.getByText("Movie2")).toBeInTheDocument();
  });

  it("Does not render movies when the search results are empty", async () => {
    render(<MoviesSearchWithLogic />);
    // how do simulate the no results state ?
    // to workaround we can mock the implementation of the Database
    searchInDbSpy.mockImplementation(() => Promise.resolve([]));
    const input = screen.getByPlaceholderText("Type movie here");
    await act(async () => {
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "some movie" } });
    });
    expect(screen.queryAllByText("Movies:")).toHaveLength(0);
    expect(screen.queryAllByText("Movie1")).toHaveLength(0);
    expect(screen.queryAllByText("Movie2")).toHaveLength(0);
  });

  it("Renders the typed query in the input", async () => {
    render(<MoviesSearchWithLogic />);
    searchInDbSpy.mockImplementation(() => Promise.resolve([]));
    const input = screen.getByPlaceholderText("Type movie here");
    await act(async () => {
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "typed query" } });
    });
    expect(screen.getByDisplayValue("typed query")).toBeInTheDocument();
    expect(screen.getByDisplayValue((content, element) => {
        console.log(element?.tagName, content);
        return element?.tagName.toLowerCase() === 'input' && content == 'typed query'
    })).toBeInTheDocument();
  });

});
