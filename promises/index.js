//
//Promises - Challenge
//Create a promise that returns some user data and throws an error when not found.
//Log the user data when listening to the promise as well as log the error.

//Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

//create a new promise
const userData = new Promise((resolve, reject) => {

		//we define/"simulate" an error to settle the promise in this one :)
		const error = false

		if (error) {
			//this will be stored if settle of the promise is reject
			reject("user not found")
		} else {
			//If settle is resolve we want to store an object with the users data.
			resolve({
				firstName: "Bob",
				lastName: "Marlin"
			})
		}
	})


userData
//promise is resolved
.then((data) => console.log(data))
//promise is rejected
.catch((error) => console.log(error))

