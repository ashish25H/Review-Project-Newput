import renderPost from '../post-section/post.js';
import renderPhotoSection from '../photos/photos.js';
import renderUserInfoCard from '../user-info-card/info-card.js';


async function renderProfile() {

    try {
        let response = await fetch('components/section-links/section-links.mustache');
        let template = await response.text();
        template = Mustache.render(template);
        $('#profile').html(template);
    } catch (err) {
        console.log(`Error : ${err}`);
    }

    $('#timeline').click(function () {
        renderPost();
    });

    $('#about').click(function () {
        renderUserInfoCard();
    });

    $('#photos').click(function () {
        renderPhotoSection();
    });

    $('#friends').click(function () {
        window.renderFriendCard();
    });
}

renderProfile();
renderUserInfoCard();