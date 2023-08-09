async function renderUserInfoCard() {
    let response = await fetch('components/user-info-card/info-card.mustache');
    let template = await response.text();

    let presentUser = JSON.parse(localStorage.getItem('currentUser'));

    template = Mustache.render(template, presentUser);
    $('#section-container').html(template);

    $('#basic-info-form').validate({
        rules : {
            name : {
                required: true,
            },
            gender : {
                required: true,
                minlength: 1,
            },
            dob : {
                required: true,
            },
            ['martail-status'] : {
                required : true,
            },
            location : {
                required : true,
            },

        },
        messages : {
            name : {
                required: 'Please enter name',
            },
            gender : {
                required: 'Please enter your gender',
                minlength: 'At least one letter',
            },
            dob : {
                required: 'Please enter date of birth',
            },
            ['martail-status'] : {
                required : 'Please enter martail-status',
            },
            location : {
                required : 'Please enter your location',
            }
        }
    });

    $('#edit-btn').click(function () {
        $('.basice-info-edit').show();
        $('.basice-info').hide();
        $('#submit-basice-info-btn').show();
        $('#cancle-info-btn').show();
    });

    $("#work-info-edit").click(function () {
        $('.work-info').hide();
        $('.work-info-edit').show();
        $('#submit-work-info-btn').show();
        $('#cancle-work-info-btn').show();
    });

    $('#cancle-info-btn').click(function () {
        $('.basice-info-edit').hide();
        $('.basice-info').show();
        $('#submit-basice-info-btn').hide();
        $('#cancle-info-btn').hide();
    })

    $('#cancle-work-info-btn').click(function () {
        $('.work-info-edit').hide();
        $('.work-info').show();
        $('#submit-work-info-btn').hide();
        $('#cancle-work-info-btn').hide();
    })

    $('#submit-basice-info-btn').click(function () {
        let name = $('#name').val();
        let gender = $('#gender').val();
        let dob = $('#dob').val();
        let maritalStatus = $('#martail-status').val();
        let location = $('#location').val();

        presentUser.name = name;
        presentUser.gender = gender;
        presentUser.dob = dob;
        presentUser.maritalStatus = maritalStatus;
        presentUser.location = location;

        localStorage.setItem('currentUser', JSON.stringify(presentUser));
        renderUserInfoCard();
        window.renderNavbar();
        window.renderProfileCard();
    });

    $('#submit-work-info-btn').click(function () {
        let occupation = $('#occupation').val();
        let skills = $('#skills').val();
        let jobs = $('#jobs').val();

        presentUser.occupation = occupation;
        presentUser.skills = skills;
        presentUser.jobs = jobs;

        localStorage.setItem('currentUser', JSON.stringify(presentUser));
        renderUserInfoCard();
        window.renderProfileCard();
    });
}

export default renderUserInfoCard;