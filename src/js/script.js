let popupBg = document.querySelector('.popup-bg');
let open = document.querySelector('.open');
let close = document.querySelector('.close');

open.onclick = function() {
    popupBg.style.display="block";
}
close.onclick = function() {
    popupBg.style.display="none";
}


