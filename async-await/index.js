//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await


//store the end point in a varible
const apiUrl = "https://api.chucknorris.io/jokes/random";

// the function that will get us the data needs time to run so we turn it into an async function.
async function getJoke() {
	// from the fetch we will recive a promise, this response needs time too so we will wait for it and store it.
	const response = await fetch(apiUrl)
	//from the response we map out the .json to store it on the data variabel we wait againt to let the promise to be settled
	const data = await response.json()
	//when we log data we get an object with several keys, the one we want is value so we target that one in the console log.
	console.log(data.value)
}

getJoke()