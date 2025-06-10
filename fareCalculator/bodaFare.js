// bodaFare.js
const prompt = require('prompt-sync')({ sigint: true }); // synchronous prompt

/**
 * Calculates and prints the estimated boda fare.
 * @param {number} distanceInKm - Trip distance in kilometers
 */
function calculateBodaFare(distanceInKm) {
  // Validate the input
  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Please enter a valid distance (a number greater than 0).");
    return;
  }

  const baseFare = 50;
  const chargePerKm = 15;
  const totalFare = baseFare + (distanceInKm * chargePerKm);

  console.log(`\nTrip distance: ${distanceInKm.toFixed(2)} km`);
  console.log(`Base fare: KES ${baseFare}`);
  console.log(`Charge per km: KES ${chargePerKm}`);
  console.log(`Total estimated fare: KES ${totalFare.toFixed(2)}\n`);
  console.log("Thank you for riding with us! 🚴‍♂️\n");
}

// Prompt the user
const input = prompt("Enter trip distance (km): ");
const distance = Number(input);

// Call the fare calculator
calculateBodaFare(distance);
