"use strict";

class Alco {
  constructor(price, name, image, average, reviews) {
    this.price = price;
    this.name = name;
    this.image = image;
    this.average = average;
    this.reviews = reviews;
  }
  generateCard() {
    const block = document.createElement("div");
    block.classList.add("myBlock");
    block.innerHTML += `
    <h1>${this.name}</h1>
    <img src="${this.image}" alt="photo" />
    <h2>${this.price}</h2>
    <p>${this.average}</p>
    <p>${this.reviews}</p>

    `;
    document.body.append(block);
  }
}

const getData = async (url) => {
  const result = await fetch(url);
  if (!result.ok) {
    alert("error");
  }
  return result.json();
};

getData("https://api.sampleapis.com/beers/ale").then((response) => {
  response.forEach(({ price, name, rating, image }) => {
    new Alco(price, name, image, rating.average, rating.reviews).generateCard();
  });
});

// getData("https://reqres.in/api/users/2").then((data) => {
//   new Human(
//     data.data.email,
//     data.data.first_name,
//     data.data.last_name,
//     data.data.avatar
//   ).generateUser();
// });

// const newuser = {
//   name: "morpheus",
//   job: "leader",
// };

// const sendData = async (url) => {
//   const result = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(newuser),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   console.log(result);
//   return result.json();
// };

// sendData("https://reqres.in/api/users").then((response) => {
//   new User(
//     response.name,
//     response.job,
//     response.id,
//     response.createdAt
//   ).generateUser();
// });
