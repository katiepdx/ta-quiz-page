// IMPORT MODULES under test here:
import { countAsYes } from '../utils.js';

const test = QUnit.test;

test('checks that the input is a yes/true condition', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const ans1 = 'yes';
    const ans2 = 'YES';
    const ans3 = 'yeah';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = countAsYes(ans1);
    const actual2 = countAsYes(ans2);
    const actual3 = countAsYes(ans3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
});

test('checks that the input is a false condition', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const ans1 = 'no';
    const ans2 = 'nope';
    const ans3 = 'NOOO';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = countAsYes(ans1);
    const actual2 = countAsYes(ans2);
    const actual3 = countAsYes(ans3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
});
