const str = 'abAc';
        

function caseInsensitivePalindrome() {

		//make the string toLowerCase
    const lowerCaseStr = str.toLowerCase()

    // compare it forwards and backwards
		//to reverse the string we need to make an array first with split with each letter ''
		//then reverse the array
		//then join the array each letter '' again
		const reverseLowerCaseStr = lowerCaseStr.split('').reverse().join('')

    // return result
		return lowerCaseStr === reverseLowerCaseStr
}
			
caseInsensitivePalindrome(str)