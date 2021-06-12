import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

test('fire event changes input', async ()=>{
    render(<input placeholder="type here"></input>);
    act(()=>{
        // fireEvent.change(input, { target: { value: "a value" } });
    });
});


test('test button click', async ()=> {
    const onClick = jest.fn();
    render(<button onClick={onClick}>Click me</button>);
    act(()=>{
    });
    expect(onClick).toHaveBeenCalled();
});