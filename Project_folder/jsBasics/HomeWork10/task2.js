// function myFuncFetch (){
//     return fetch ('https://jsonplaceholder.typicode.com/todos/1').then(response => {
//         if (!response.ok) {
//             throw new Error('Fetch failed')
//         } return response.json()
//     } )
// }

// function myFuncUserFetch (){
//     return fetch ('<https://jsonplaceholder.typicode.com/users/1>').then(response => {
//         if (!response.ok) {
//             throw new Error ('User fetch failed')
//         } return response.json()
//     } )
// }

// Promise.all([myFuncFetch(), myFuncUserFetch()]).then(([toDo, user]) => {
//     console.log('ToDo', toDo)
//     console.log('User', user)
// }).catch(error => {
//     console.log('Error', error.message)
// })


function myFuncFetch() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Fetch failed');
            }
            return response.json();
        })
        .catch(error => {
            console.log('Fetch error:', error.message);
        });
}

function myFuncUserFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('User fetch failed');
            }
            return response.json();
        })
        .catch(error => {
            console.log('User fetch error:', error.message);
        });
}

Promise.all([myFuncFetch(), myFuncUserFetch()])
    .then(([toDo, user]) => {
        console.log('ToDo', toDo);
        console.log('User', user);
    })
    .catch(error => {
        console.log('Promise error:', error.message);
    });