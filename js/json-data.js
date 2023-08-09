// Read and store current-user.json
// fetch('js/current-user.json')
//     .then(response => response.json())
//     .then(data => localStorage.setItem('currentUser', JSON.stringify(data)));

// // Read and store friends.json
// fetch('js/friends.json')
//     .then(response => response.json())
//     .then(data => localStorage.setItem('friends', JSON.stringify(data)));

// // Read and store users.json
// fetch('js/users.json')
//     .then(response => response.json())
//     .then(data => localStorage.setItem('users', JSON.stringify(data)));


if (!(localStorage.getItem('currentUser'))) {
    fetch('js/current-user.json')
        .then(response => response.json())
        .then(data => localStorage.setItem('currentUser', JSON.stringify(data)));
}

if (!(localStorage.getItem('friends'))) {
    fetch('js/friends.json')
        .then(response => response.json())
        .then(data => localStorage.setItem('friends', JSON.stringify(data)));
}

if (!(localStorage.getItem('users'))) {
    fetch('js/users.json')
        .then(response => response.json())
        .then(data => localStorage.setItem('users', JSON.stringify(data)));
}