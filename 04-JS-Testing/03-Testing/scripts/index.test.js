import {getName} from "./index.js";

//assertion
it("Should return the string 'Sam, 22 years old. '", () =>{
    const output = getName('Sam',22);
    expect(output).toBe('Sam, 22 years old.');
})

it("Should return the string 'doctor, 23'", () =>{
    const output = getName('doctor, 23');
    expect(output).toBe('doctor, 23 years old.');
})