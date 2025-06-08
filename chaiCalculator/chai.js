function calculateChaiIngredients(numberOfCups) {

    //number of cups multiplied by the ratio per cup.
    const water = numberOfCups * 200;//ml
    const milk = numberOfCups * 50;//ml
    const teaLeaves = numberOfCups * 1;//tablespoon
    const sugar = numberOfCups * 2;//teaspoon(s)

  //console output
    console.log(`To make ${numberOfCups} cups of Kenyan Tea, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons\n`);
    console.log("Enjoy your Tea!");
  }
  
  const cups = Number(prompt("Hi! How many cups of Tea would you like to prepare?"));
  calculateChaiIngredients(cups);
  