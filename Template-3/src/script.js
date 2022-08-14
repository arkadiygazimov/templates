//---------- burger

const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', function () {

    const burgerActive = document.querySelector('.header__burger');
    const headerNavActive = document.querySelector('.header__nav');
    const navBg = document.querySelector('.nav-bg');

    burgerActive.classList.toggle('active');
    headerNavActive.classList.toggle('active');
    navBg.classList.toggle('active');
}, false);


//---------youtube video
let tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '_6Xa4f6Izh4',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

let p = document.getElementById ("player");
$(p).hide();

let t = document.getElementById ("thumbnail");
t.src = "img/promo-video.png";

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.start-video').fadeIn('normal');
    }
}

$(document).on('click', '.start-video', function () {
    $(this).hide();
    $("#player").show();
    $("#thumbnail_container").hide();
    player.playVideo();
});

// footer

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.classList.toggle('active');

    elem.parentNode.classList.toggle('active');
});

//--------------


const scrollTop = document.querySelector('.scroll-arrow');

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 500) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
  });

scrollTop.addEventListener('click', function() {

    $('html').animate(

        { scrollTop: 0 },
        { duration: 500 }
    );
});

//------- tooltip

let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;

  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  setTimeout(() => (
  tooltipElem.style.left = event.pageX + 15 + 'px',
  tooltipElem.style.top = event.pageY + 15 + 'px'
  ),500);
};

document.onmouseout = function(e) {

  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }

};

//----------- call
const call = document.querySelector('.call-us');

window.addEventListener('scroll', function() {
    setTimeout(() =>
    (call.classList.add('active')),7000);
  });

document.onclick = function(event) {
    if (event.target.className != 'call-us__remove') return;

    let callUs = event.target.closest('.call-us');
    callUs.remove();
  };