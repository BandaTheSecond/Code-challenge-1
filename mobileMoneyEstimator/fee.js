function estimateTransactionFee(amountToSend) {
    //ensuring amount entered is a number
    if (isNaN(amountToSend) || amountToSend <= 0) {
      console.log("Please enter a valid amount above Ksh.0.");
      return;
    }
  // Calculate the transaction fee based on the amount entered
    const feePercentage = 0.015;
    let fee = amountToSend * feePercentage;
  
    if (fee < 10) {
      fee = 10;
    } else if (fee > 70) {
      fee = 70;
    }
  
    const total = amountToSend + fee;
  // Output the results to the console
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}\n`);
    console.log("Enjoy Secure money transfer!");
  }
  
  // Prompt and call the function
  const amount = Number(prompt("How much are you to send? (KES):"));
  estimateTransactionFee(amount);
  