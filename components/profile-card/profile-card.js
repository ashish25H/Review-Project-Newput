
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

async function renderProfileCard() {
    let response = await fetch('components/profile-card/profile-card.mustache');
    let template = await response.text();

    let logedInUser = JSON.parse(localStorage.getItem('currentUser'));
    let friendsNumber = JSON.parse(localStorage.getItem('friends'));

    document.getElementById('profile-card').innerHTML = Mustache.render(template, logedInUser);


    let length = friendsNumber.length;
    $('#friend-count').text(length);
}

renderProfileCard();

// export default renderProfileCard;
window.renderProfileCard = renderProfileCard;