async function renderLoginPage(){
    let response = await fetch('components/login/login.mustache');
    let template = await response.text();
    // .then(response => response.text())
    // .then(template =>  template);

    document.getElementById('login-form').innerHTML = Mustache.render(template);

    const script = document.createElement("script");
    script.src = "components/login/login-script.js";
    document.body.appendChild(script);
}

renderLoginPage();

