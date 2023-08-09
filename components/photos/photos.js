async function renderPhotoSection() {
    let response = await fetch('components/photos/photos.mustache');
    let template = await response.text();
    let photos = JSON.parse(localStorage.getItem('posts')) || [];
    let addedUserPhotos = JSON.parse(localStorage.getItem('userPhotos')) || [];
    let photo = {
        photosArr: photos,
        userPhotos: addedUserPhotos,
    }

    template = Mustache.render(template, photo);
    $('#section-container').html(template);

    // if(photos || addedUserPhotos){
    //     $(".photo-list").css('padding', '20px');
    // }else{
    //     $(".photo-list").css('padding', '0');
    // }

    $("#add-photo-btn").click(function () {
        let photoUrl = $('#photo-url').val();
        let userPhotos = JSON.parse(localStorage.getItem('userPhotos')) || [];
        if (photoUrl) {
            userPhotos.push(photoUrl);
        }
        localStorage.setItem('userPhotos', JSON.stringify(userPhotos));
        $('#exampleModal').modal('hide');
        renderPhotoSection();
    });
}

export default renderPhotoSection;