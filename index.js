function addressMaker(address) {
  const { city, state } = address; //descontructing the object adress
  const newAddress = {
    //once we decisntruct the object we dont need anymore to acces like address.city
    city, //because the key is the same as the value passed using object literals we can get rid of  city: city
    state,
    country: "United States"
  };
  //here we didn't deconstruct the country key so we need to acces it like newAddress.country
  console.log(`${city}, ${state}, ${newAddress.country}`);
}

addressMaker({ city: "Austin", state: "Texas" });

// Original code:
// function addressMaker(address) {
//   const newAddress = {
//       city: address.city,
//       state: address.state,
//       country: 'United States'
//   };

// }

// addressMaker({city: 'Austin', state: 'Texas'});
