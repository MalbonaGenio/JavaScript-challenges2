/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

const printfood = (food = "something")  => {
	console.log(`I'm going to buy ${food} from the grocery shop`)
	} //As we are only passing one value we could write the function without the { } an it will still work. If we did not have a default param on the argument it's also possible to not use  the ( )

	//const printfood = food  => console.log(`I'm going to buy ${food} from the grocery shop`)

printfood("milk") //input a string in ""

