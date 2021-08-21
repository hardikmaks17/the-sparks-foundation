console.log("Linked: google.js");

// signin
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    let gId = document.getElementById('g-id');
    gId.innerText = profile.getId();
    let gName = document.getElementById('g-name');
    gName.innerText = profile.getName();
    let gEmail = document.getElementById('g-email');
    gEmail.innerText = profile.getEmail();
    let gImage = document.getElementById('g-image');
    gImage.src = `${profile.getImageUrl()}`;

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

// signout
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}