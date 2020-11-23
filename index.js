// **Classes Challenge**:

// Create a class Player with the following:
// - Add a Name and Country properties
// - Add a function that when it runs should print into the console ("Messi was born in Argentina");
// - Make sure to adapt this function to receive dynamic Names and Clubs.

// Create a Subclass called TennisPlayer that extends from the class Player
// - Add a new property Age.
// - Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
// - Make sure the Name and Age are dynamic.

class Player {
	//asign the values to class Player
	constructor (name, country) {
		this.name = name
		this.country = country
	}

	//creates a function to print the name and the country in a dynamic way depending on the instances created.
	//need to use this.name to reference to the values inside the class without it it will not work.
	playerInfo () {
		console.log(`${this.name}, was born in ${this.country}.`)
	}
}

//creates an instance of a player using the Player class
let iu = new Player("Iu", "Catalonia")
//calls the function inside the class, it will use the argument set in the instance creation
iu.playerInfo()
