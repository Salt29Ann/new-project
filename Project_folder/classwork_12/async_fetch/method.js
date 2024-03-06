import dataFromFile from './Example.json'

async function getSingleUserData() {
    let response = await fetch ('https://reqres.in/api/users/2')
    let data = await response.json()
    console.log(data)
    // console.log(response) - log all data for response
}

getSingleUserData() 

const data = {
    "name": "morpheus",
    "job": "leader"
}

async function createSingleUserData() {
    const const_response = await fetch ('https://reqres.in/api/users',
   {method: 'POST',
    body: data })
    let statuscode = post_response.status
    console.log(statuscode)
    let data_reponse = post_response.json()
    console.log(data_reponse)
}
createSingleUserData()

// JSON =>
// JSON.parse
// JSON.stringify

let convertDataJSONinJS = JSON.stringify