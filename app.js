const numbers = [0, 1, 2, 3, 4, 5];

function userPlay() {
   let randomPlay = numbers[Math.floor(Math.random() * 6)];
   return randomPlay;
 } 
 
function computerPlay() {
   let randomPlay = numbers[Math.floor(Math.random() * 6)];
   return randomPlay;
 } 
 
 
 let result;
 function afterRound(playerSelection, computerSelection) { 
   console.log(playerSelection, computerSelection);
   switch (playerSelection) {
     case 0: 
       if(computerSelection == playerSelection) {
         result = 'It is a tie';
       } else if(computerSelection == 1) {
         result = 'No winner';
       } else if(computerSelection == 2) {
        result = 'No winner';
       } else if(computerSelection == 3) {
        result = 'Computer wins';
       } else if(computerSelection == 4) {
        result = 'No winner';
       } else if(computerSelection == 5) {
        result = 'Jackpot! You win';
       } else {
        result = 'No winner';
       }
       
      break;
       
      case 1: 
      if(computerSelection == 0) {
        result = 'No winner';
      } else if(computerSelection == playerSelection) {
        result = 'It is a tie';
      } else if(computerSelection == 2) {
        result = 'Computer wins';
      } else if(computerSelection == 3) {
        result = 'No winner';
      } else if(computerSelection == 4) {
        result = 'Jackpot! You win';
      } else if(computerSelection == 5) {
        result = 'No winner';
      } else { 
        result = 'No winner';
      }
       
      break;
       
      case 2:
      if(computerSelection == 0) {
        result = 'No winner';
      } else if(computerSelection == 1) {
        result = 'Computer wins';
      } else if(computerSelection == playerSelection) {
        result = 'It is a tie';
      } else if(computerSelection == 3) {
        result = 'Jackpot! You win';
      } else if(computerSelection == 4) {
        result = 'No winner';
      } else if(computerSelection == 5) {
        result = 'No winner';
      } else { 
        result = 'No winner';
      }
       
      break;
       
      case 3:
      if(computerSelection == 0) {
        result = 'Computer wins';
      } else if(computerSelection == 1) {
        result = 'No winner';
      } else if(computerSelection == 2) {
        result = 'Jackpot! You win';
      } else if(computerSelection == playerSelection) {
        result = 'It is a tie';
      } else if(computerSelection == 4) {
        result = 'No winner';
      } else if(computerSelection == 5) {
        result = 'No winner';
      } else { 
        result = 'No winner';
      }
       
      break;
       
      case 4:
      if(computerSelection == 0) {
        result = 'No winner';
      } else if(computerSelection == 1) {
        result = 'Jackpot! You win';
      } else if(computerSelection == 2) {
        result = 'No winner';
      } else if(computerSelection == 3) {
        result = 'No winner';
      } else if(computerSelection == playerSelection) {
        result = 'It is a tie';
      } else if(computerSelection == 5) {
        result = 'No winner';
      } else { 
        result = 'No winner';
      }
       
      break;
       
      case 5:
      if(computerSelection == 0) {
        result = 'Jackpot! You win';
      } else if(computerSelection == 1) {
        result = 'No winner';
      } else if(computerSelection == 2) {
        result = 'No winner';
      } else if(computerSelection == 3) {
        result = 'No winner';
      } else if(computerSelection == 4) {
        result = 'No winner';
      } else if(computerSelection == playerSelection) {
        result = 'No winner';
      } else { 
        result = 'No winner';
      }
       
      break;
   } 
   return result;
 } 
 
 const playerSelection = userPlay();
 const computerSelection = computerPlay();
 console.log(afterRound(playerSelection, computerSelection));
 