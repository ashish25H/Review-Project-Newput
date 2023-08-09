async function renderFriendList() {
    let response = await fetch('components/friend-list/friend-list.mustache');
    let template = await response.text();
    let images = JSON.parse(localStorage.getItem('friends'));
    let x = JSON.parse(localStorage.getItem('friends'));

    let img = {
        arr: images,
        // firstImg : x,
    }

    document.getElementById('friend-list').innerHTML = Mustache.render(template, img);

}

renderFriendList();
window.renderFriendList = renderFriendList;

// window.addEventListener('storage', function(event) {
//     if (event.key === 'friendsImg') {
//         renderFriendList();
//     }
// });