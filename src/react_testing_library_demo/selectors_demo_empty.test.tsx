import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  jest.resetAllMocks();
});

test('getByText', ()=>{
  render(<div>This is the text</div>);
});

test('getByDisplayValue', ()=>{
  render(<input value="This is the display value"></input>);
});

test('getByPlaceholderText', ()=>{
  render(<input placeholder="This is the placeholder text"></input>);
});


