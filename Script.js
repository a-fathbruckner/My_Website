const aboutBtn = document.getElementById('about_me'); //About me Button
const popupOverlay = document.getElementById('popupOverlay'); // overlay div
const popup = document.getElementById('popup'); // popup content box
const closeBtn = document.getElementById('closePopup'); //close popup button

// Show popup when about me is clicked
aboutBtn.addEventListener('click', () => {
    about_meOverlay.style.display = 'flex'; // make overlay visible
    setTimeout(() => popup.classList.add('show'), 10); // animate popup
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', () => {
    popup.classList.remove('show'); //hide animation
    setTimeout(() => {
        about_meOverlay.style.display = 'none'; //hide overlay animation
    }, 400);
});
