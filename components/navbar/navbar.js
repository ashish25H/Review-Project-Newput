function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

async function renderNavbar() {
    let response = await fetch('components/navbar/navbar.mustache');
    let template = await response.text();

    let user = JSON.parse(localStorage.getItem('currentUser'));
    user.name = capitalizeFirstLetter(user.name);

    document.getElementById('nav-component').innerHTML = Mustache.render(template, user);

    $('.arrow-down').click(function() {
        $('.logout-btn').toggle();
    });

    $('.logout-btn').click(function() {
        location.reload();
    });

}
renderNavbar();

window.renderNavbar = renderNavbar;