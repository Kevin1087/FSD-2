// Define a module to handle number reversal and checking
const NumberReverseModule = {
    // Function to reverse a given number
    reverseNumber: function(num) {
      return parseInt(num.toString().split('').reverse().join(''));
    },
    
    // Function to check if square of reverse is equal to reverse of square
    checkSquareReverse: function(num) {
      // Calculate square of the reverse
      const reverse = this.reverseNumber(num);
      const reverseSquare = reverse * reverse;
      
      // Calculate reverse of the square
      const squareReverse = this.reverseNumber(reverseSquare);
      
      // Check if they are equal
      return (squareReverse === reverseSquare);
    },
    
    // Function to loop through numbers from 1 to 100 and check the condition
    checkAllNumbers: function() {
      for(let i=1; i<=100; i++) {
        if(this.checkSquareReverse(i)) {
          console.log(i);
        }
      }
    }
  }
  
  // Test the module
  NumberReverseModule.checkAllNumbers();
  