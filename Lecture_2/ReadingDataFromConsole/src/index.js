// Import the readline module
const readline = require("readline");

// Create a readline interface
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for input
interface.question("Enter the first number: ", (n1) => {
  interface.question("Enter the second number: ", (n2) => {
    const maxi = Math.max(Number(n1), Number(n2));
    console.log(`The maximum of the two numbers is: ${maxi}`);

    // Close the readline interface
    interface.close();
  });
});

// ## Explanation
// This code creates an interface for user input and output using the readline module in Node.js.
// It then prompts the user to enter two numbers using the question method of the interface.
// Once the user enters the two numbers, the code converts them to numbers using the `Number` function and finds the maximum of the two numbers using the Math.max function.
// Finally, it displays the result to the user using console.log and closes the interface using the close method.
