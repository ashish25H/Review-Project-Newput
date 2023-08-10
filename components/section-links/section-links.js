import renderPost from '../post-section/post.js';
import renderPhotoSection from '../photos/photos.js';
import renderUserInfoCard from '../user-info-card/info-card.js';

function hideCards() {
    let width = $('body').outerWidth();
    if (width >= 300 && width <= 767) {
        $('.card-container').hide();
        $('.follow-card').hide();
        $('.friend-list-card').hide();
    }
}

async function renderProfile() {

    try {
        let response = await fetch('components/section-links/section-links.mustache');
        let template = await response.text();
        template = Mustache.render(template);
        $('#profile').html(template);
    } catch (err) {
        console.log(`Error : ${err}`);
    }

    $('.hamburger-icon').click(function () {
        $(this).hide();
        $('.link').show();
        $('.x-mark').show();
    });

    $('.x-mark').click(function () {
        $(this).hide();
        $('.link').hide();
        $('.hamburger-icon').show();
    });

    $('#timeline').click(function () {
hideCards();
        renderPost();
    });

    $('#about').click(function () {
        let width = $('body').outerWidth();
    if (width >= 300 && width <= 767) {
        $('.card-container').show();
        $('.follow-card').show();
        $('.friend-list-card').show();
    }
        renderUserInfoCard();
    });

    $('#photos').click(function () {
        hideCards();
        renderPhotoSection();
    });

    $('#friends').click(function () {
        hideCards();
        window.renderFriendCard();
    });
}

renderProfile();
renderUserInfoCard();