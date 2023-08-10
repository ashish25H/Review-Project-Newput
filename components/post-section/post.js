function durationOfPost() {
    const currentDate = new Date();
    const postDate = new Date(this.postTime);
    const timeDifference = currentDate - postDate;
    const seconds = Math.floor(timeDifference / 1000);

    if (seconds < 60) {
        return seconds + " seconds ago";
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return minutes + " minutes ago";
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return hours + " hours ago";
    }

    const days = Math.floor(hours / 24);
    return days + " days ago";
};



$('#post-form').validate({
    rules: {
        ['img-url']: {
            required: true,
            url: true,
        },
        title: {
            required: true,
            minlength: 1,
        },
        description: {
            required: true,
            minlength: 10,
        },
    },
    messages: {
        ['img-url']: {
            required: 'Please enter image url',
            url: 'URL is not valid',
        },
        title: {
            required: 'Please enter a title',
            minlength: 'At least one letter',
        },
        description: {
            required: 'Please enter description',
            minlength: 'At least 10 letter',
        }

    }
});

async function renderPost() {
    let response = await fetch('components/post-section/post.mustache');
    let template = await response.text();
    
    let posts = [];
    let post = JSON.parse(localStorage.getItem('posts'));

    if (post) {
        post.map((item) => {
            item.durationOfPost = eval('(' + item.durationOfPost + ')');
        });
    }

    let postObj = {
        posts: post,
    }

    template = Mustache.render(template, postObj);
    $('#section-container').html(template);

    $('#post-form').submit(function (e) {
        e.preventDefault();
        e.stopPropagation();

        let url = $('#img-url').val();
        let title = $('#title').val();
        let description = $('#description').val();

        let durationOfPostFun = durationOfPost.toString();
        const post = {
            url,
            title,
            description,
            postTime: new Date(),
            durationOfPost: durationOfPostFun,
        }

        posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.unshift(post);
        localStorage.setItem('posts', JSON.stringify(posts));
        $('#post-form-modal').modal('hide');
        renderPost();
    });
}
export default renderPost;