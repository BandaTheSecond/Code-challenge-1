// chai.js
const prompt = require('prompt-sync')({ sigint: true }); // Node.js prompt

function chaiIngredientscalculator(numberOfCups) {
  // ingredients per cup
  const waterPerCup = 200;
  const milkPerCup = 50;
  const majaniPerCup = 1;
  const sugarPerCup = 2;

  // total ingredients
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalMajani = numberOfCups * majaniPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // display results
  console.log(`\nTo make ${numberOfCups} cup(s) of Chai Bora tea, you will need:`);
  console.log(`• Water: ${totalWater} ml`);
  console.log(`• Milk: ${totalMilk} ml`);
  console.log(`• Majani (tea leaves): ${totalMajani} tbsp`);
  console.log(`• Sukari (sugar): ${totalSugar} tsp`);
  console.log("\nEnjoy your Chai Bora Tea! ☕");
}

// prompt user
const input = prompt("How many cups of Chai Bora tea would you like? ");
const numberOfCups = Number(input);

// validate and run
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  chaiIngredientscalculator(numberOfCups);
} else {
  console.log("Please enter a valid positive number of cups.");
}

