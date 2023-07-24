let playBtn = document.querySelector('.detail_btn-play');
let massageBox = document.querySelector('.massage_container');
let watchContainer = document.querySelector('.watch_container');
let watchIFrame = document.querySelector('.iframe_container');
let bannerContainer = document.querySelector('.banner_container');
let closeMassgeTop = document.querySelector('.btn_exit-top');
let closeMassageBot = document.querySelector('.btn_exit');
let filterButton = document.querySelector('.list_type-filter');
let movieListMassage = document.querySelector('.movies_massage');
let moviesList = document.querySelector('.movies_list');
let playMovieFuc = () => {
    let canWatch = true;
    if (canWatch) {
        bannerContainer.classList.remove('active');
        watchContainer.classList.add('active');
        watchIFrame.setAttribute('src', watchIFrame.getAttribute('src') + '?rel=0&autoplay=1');
    }
    else
        massageBox.classList.add('active');
};
function closeMassage() {
    massageBox.classList.remove('active');
}
if (closeMassgeTop != null && closeMassageBot != null) {
    closeMassgeTop.addEventListener('click', closeMassage);
    closeMassageBot.addEventListener('click', closeMassage);
}
