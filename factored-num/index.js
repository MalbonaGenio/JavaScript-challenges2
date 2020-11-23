const num = 5
//set up a sum of the multiplucations
let factoredNum = 1

function factorialNumber() {
	//keep multiplying until i equals num
	for (let i = 1; i <= num; i++ ) {
		//don't put he let factoredNum = 1 here as it will reset the loop and get 1,2,3... as a result.
		factoredNum = factoredNum * i
		console.log(factoredNum)
	}		
	return factoredNum
}

factorialNumber(num)