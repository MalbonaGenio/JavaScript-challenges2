//Input the string we want to put into brackets
const str = "Yo";

function encloseInBrackets() {
	// use template literals to put bracketsand the value of the str in betwen and return the solution
	const solution = `(${str})`
	console.log(solution)
	return solution
}

encloseInBrackets()