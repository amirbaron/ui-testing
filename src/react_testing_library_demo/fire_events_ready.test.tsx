import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

test('fire event changes input', async ()=>{
    render(<input placeholder="type here"></input>);
    act(()=>{
        const input = screen.getByPlaceholderText('type here');
        fireEvent.focus(input);
        fireEvent.change(input, { target: { value: "a value" } });
    });
    expect(screen.getByDisplayValue('a value')).toBeInTheDocument();
});


test('test button click', async ()=> {
    const onClick = jest.fn();
    render(<button onClick={onClick}>Click me</button>);
    act(()=>{
        const button = screen.getByText('Click me');
        fireEvent.click(button);
    });
    expect(onClick).toHaveBeenCalled();
});