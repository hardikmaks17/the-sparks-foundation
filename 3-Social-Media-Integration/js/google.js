console.log("Linked: google.js");

// signin
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    // let gId = document.getElementById('g-id');
    // gId.innerText = profile.getId();
    // let gName = document.getElementById('g-name');
    // gName.innerText = profile.getName();
    // let gEmail = document.getElementById('g-email');
    // gEmail.innerText = profile.getEmail();
    // let gImage = document.getElementById('g-image');
    // gImage.src = `${profile.getImageUrl()}`;
    
    gDisplay();
}

// signout
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

// display

function gDisplay() {
    let profileBody = document.getElementById('profile-body');
    html = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${profile.getImageUrl()}" class="img-fluid rounded-start g-image" alt="" id="g-image">
        </div>
        <div class="col-md-8">
            <div class="card-body text-left">
                <h5 class="card-title" id="g-name">${profile.getName()}</h5>
                <p class="card-text" id="g-email">${profile.getEmail()}</p>
                <p class="card-text"><small class="text-muted" id="g-id">${profile.getId()}</small></p>
            </div>
        </div>
        </div>
    </div>
    `;
    profileBody.innerHTML = html;
}