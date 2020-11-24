const str = "var_1__Int2";


function firstDigit() {
	//create an array with number so we cna check if in the string is equal a a value in the numArr
	const numArr = ['1','2','3','4','5','6','7','8','9']
	//create an array from the string 
	const strArr = str.split('')

//for every char of the strArr 
	for (char of strArr){
		//if the char is included in the numArr(its a number) return the value of that char (value of the position in the strArr)
		if (numArr.includes(char)){
			console.log(char)
			return char
		}
	}
}

firstDigit()