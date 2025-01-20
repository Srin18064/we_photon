const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

function showMediaOptions() {
    var contentPreference = document.getElementById("contentPreference").value;
    var videoOptions = document.getElementById("videoOptions");
    var photoOptions = document.getElementById("photoOptions");

    videoOptions.classList.add("hidden");
    photoOptions.classList.add("hidden");

    if (contentPreference == "video") {
        videoOptions.classList.remove("hidden");
    } else if (contentPreference == "photo") {
        photoOptions.classList.remove("hidden");
    }
}