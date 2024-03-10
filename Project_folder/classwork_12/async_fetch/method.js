import dataFromFile from "./Example.json" with { type: "json" };
// console.log(dataFromFile)

async function getSingleUserData() {
  let response = await fetch("https://reqres.in/api/users/2");
  let data = await response.json();
  console.log(data);
  // console.log(response) - log all data for response
}

getSingleUserData();

//  const data = {
//     "name": "morpheus",
//     "job": "leader"
// }

// async function createSingleUserData() {
//     const post_response = await fetch ('https://reqres.in/api/users',
//    {method: 'POST',
//     body: data })
//     let statuscode = post_response.status
//     console.log(statuscode)
//     let data_reponse = post_response.json()
//     console.log(data_reponse)
// }
// createSingleUserData()

// JSON => Java Script Object Notation
// JSON.parse - приймає рядок у форматі JSON і перетворює його у відповідний об'єкт або масив у JS
// JSON.stringify - приймає об'єкт або масив у JS і перетворює його у рядок у форматі JSON

// // // Correct version
const data = {
  name: "morpheus",
  job: "leader",
};

async function createSingleUserData() {
  const post_response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataFromFile),
  });

  const statuscode = post_response.status;
  console.log(statuscode);

  // Очікуйте парсингу JSON відповіді
  const data_response = await post_response.json();
  console.log(data_response);
}

createSingleUserData();

const dataJson = '{"name": "Jackie", "title": "CEO"}';

const dataJsonObject = {
  name: "Jackie",
  title: "CEO",
};

let convertJsoninJS = JSON.parse(dataJson);
console.log(convertJsoninJS);

let convertdataJSObject = JSON.stringify(dataJsonObject);
console.log(convertdataJSObject);




// npx prettier Project_folder/classwork_12/async_fetch/method.js --write