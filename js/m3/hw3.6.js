// BEGIN
// const creditCardNumber = (cardNumber, numberOfStars ) => {
//     console.log(`${'*'.repeat(numberOfStars)}${cardNumber.slice(-4)}`)
//   }
  // END
  

  const getHiddenCard = (cardNumber, numberOfStars) => {
      
      const sliseCardNumber = cardNumber.slice(-4);
      console.log(sliseCardNumber); 
      const card = sliseCardNumber.padStart(numberOfStars,'*');
      console.log(card);
  }

  
  getHiddenCard('1234567891123456', 10);
  console.log('10'.padStart(4, '+'))