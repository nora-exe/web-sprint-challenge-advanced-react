// Write up the two tests here and make sure they are testing what the title shows
import React from 'react';
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";


test("renders CheckoutForm without errors", ()=>{
    render(<CheckoutForm />);
});

test("When the user fills out and submits form, success message appears", async ()=> {
    //Arrange: Setup our component
    render(<CheckoutForm />);

    //Act:
    // - get the state input and add in a value
    const zip = screen.getByLabelText("Zip:");
    userEvent.type(zip, "80207");

    // - find and click submit button
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert:
    // state name should be on the the screen.
    // const zipText = await waitFor(() => screen.findByText(80207))
    // expect(zipText).toBeInTheDocument();

    await waitFor(() => {
        const zipText = screen.queryByText(80207);
        expect(zipText).toBeInTheDocument();
    });
});


const axios = ()=> {
    return new Promise((resolve, reject)=> {
        resolve({result:"new data"});
    });
}

axios()
    .then(res => {
        console.log(res);
    });

// test("renders CheckoutForm without errors", () => {
//     render(<CheckoutForm />);
// });
// test("form header renders", () => {
//     //load page, look for react plants
//     //Arrange: Set up component
//     render(<CheckoutForm />);
//     //Look for text
//         const headerText = screen.queryByText(/Form/i);
//         expect(headerText).toBeInTheDocument();
// });
// test("form shows success message on submit with form details", () => {
//     //submit form, check for text
//     //Arrange: Setup component
//     render(<CheckoutForm />);
//     //Act:
//     // - get the desired input and add in a value
//     const stateInput = screen.getByLabelText("State:");
//     userEvent.type(stateInput, "wisconsin");
//     // - find and click submit button
//     const button = screen.getByRole("button");
//     userEvent.click(button);
//     //Assert:
//     // check for success message render
//     const successText = screen.findByText(/woo-hoo/i);
//     expect(successText).toBeInTheDocument;
//     //also check if user-input renders in success message
//     const stateText = screen.queryByText(/wisconsin/i);
//     expect(stateText).toBeInTheDocument();
// });
// const axios = ()=> {
//     return new Promise((resolve, reject)=> {
//         resolve({result:"new data"});
//     });
// }

// axios()
//     .then(res => {
//         console.log(res);
//     });






