// Initialize a variable to keep track of the card count
let count = 0;

// Define a function named cc (card counting)
function cc(card) {
  // Use a switch statement to evaluate the card's value
  switch(card) {
    // For these cases, increment the count by 1
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    // For these cases, leave the count unchanged (add 0)
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    // For these cases, decrement the count by 1
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
  
  // Check the value of the count and return a string with a decision
  if (count > 0) {
    return count + " Bet"; // If count is positive, return "Bet"
  } else {
    return count + " Hold"; // If count is zero or negative, return "Hold"
  }
}
