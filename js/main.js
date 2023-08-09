import renderPost from "../components/post-section/post.js";
import renderPhotoSection from "../components/photos/photos.js";
import renderUserInfoCard from "../components/user-info-card/info-card.js";

$(document).ready(function () {
    // Define routes using page()
    page('/timeline', function () {
        renderComponent("timeline");
    });

    page('/photos', function () {
        renderComponent("photos");
    });

    page('/friends', function () {
        renderComponent("friends");
    });

    page('/about', function () {
        renderComponent("about");
    });

    

    function renderComponent(component) {
        const appContainer = $("#section-container");
        switch (component) {
            case "timeline":
                renderPost();
                break;
            case "photos":
                renderPhotoSection();
                break;
            case "friends":
                window.renderFriendCard();
                break;
            case "about":
                renderUserInfoCard();
                break;
            default:
                appContainer.html("<h1>404 - Not Found</h1>");
                break;
        }
    }

    // Start routing
    page();
});




