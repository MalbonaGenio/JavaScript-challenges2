// /**
//  * Fetch - Challenge
//  * 
//  * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
//  * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
//  * 
//  * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
//  * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//  */

//specify the endpoint
fetch ('https://jsonplaceholder.typicode.com/comments/1')
	// map out the body
	.then(response => response.json())
	//console.log the data from the .json
	.then(data => console.log(data))

//specify endpoint
fetch ('https://jsonplaceholder.typicode.com/comments', {
	// specify the post
	method: 'POST',
	body: JSON.stringify({
		postId: 1,
		name: 'Charles',
		email: '123@123.com',
		body: 'Lorem ipsum'
	})
}) 
	// //get the data that is returning us the id 
	.then(response => response.json())
	.then(data => console.log(data))

