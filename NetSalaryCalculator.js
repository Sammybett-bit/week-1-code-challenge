// Assign the basic salary and benefits values
let basicSalary = 8000;
let benefits = 1800;
// Calculate the gross salary by summing up basic salary and benefits
let grossSalary = Math.floor(basicSalary + benefits);

// Initialize variables for payee, nhif, nssf, and net salary
let payee = 0;
let nhif = 0;
let nssf = Math.floor(grossSalary * 0.05);
let netSalary = 0;

// Output the gross salary and nssf values to the console
console.log("grossSalary: " + grossSalary);
console.log("nssf: " + nssf);

// Function to calculate the payee deduction based on basic salary
function calc() {
  if (basicSalary < 24000) {
    payee = basicSalary * 0.01;
  } else if (basicSalary < 32333) {
    payee = basicSalary * 0.25;
  } else {
    payee = basicSalary * 0.3;
  }
  // Output the payee value to the console
  console.log("payee: " + payee);
}

// Function to calculate the NHIF deduction based on the gross salary
function nhifDeductions() {
  // Perform a series of if-else statements to determine the NHIF deduction based on gross salary ranges
  // Each range has a specific NHIF deduction amount
  // Update the nhif variable accordingly
  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary >= 5999 && grossSalary <= 7999) {
    nhif = 300;
  } // ... other salary ranges ...
  else if (grossSalary >= 99999) {
    nhif = 1700;
  }
  // Output the nhif value to the console
  console.log("nhif: " + nhif);
}

// Function to calculate the net salary by deducting payee, nhif, and nssf from the gross salary
function calcNetSalary() {
  netSalary = Math.floor(grossSalary - (payee + nhif + nssf));
  // Output the net salary value to the console
  console.log("netSalary: " + netSalary);
}

// Call the calc() function to calculate the payee deduction
calc();

// Call the nhifDeductions() function to calculate the NHIF deduction
nhifDeductions();

// Call the calcNetSalary() function to calculate the net salary
calcNetSalary();

