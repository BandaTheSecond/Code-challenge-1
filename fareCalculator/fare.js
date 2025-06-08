function calculateBodaFare(distanceInKm) {
    //ensures distance entered is not negative or zero
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
      console.log("Please enter valid distance(above 0 kilometers ).");
      return;
    }
  
    const baseFare = 50;
    const chargePerKm = 15;
    const tripFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + tripFare;
  //output to display
    console.log(`Distance travelled is ${distanceInKm} km:`);
    console.log(`base fare: KES ${baseFare}`);
    console.log(`Trip fare: KES ${tripFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Enjoy the ride!");
  }
  
  // Prompt and call the function
  const distance = Number(prompt("Where to? Distance to destination in kilometers?:"));
  calculateBodaFare(distance);
  