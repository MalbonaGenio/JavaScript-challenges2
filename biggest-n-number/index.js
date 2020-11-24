const num = 2;
let bigNum = ''

function largestNumber() {
    //repeat the number 9 num times
		for (let i = 0; i < num; i++){
			// store the amount of 9 in a variable
			bigNum = bigNum.concat('9')
		}
		// return the amount of 9s 
		//need to tranform from a string into a integer
		return parseInt(bigNum)
}

largestNumber()

// Extra solution from the teacher
// function largestNumber(num) {
//     const placeholder = '9'.repeat(num);
    
//     return parseInt(placeholder);
// }