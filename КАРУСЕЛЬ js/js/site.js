function toggleOpen(el) {
  el.classList.toggle('open')
  el.nextElementSibling.classList.toggle('open')
}
var app = new Swiper('.app-container', {
  hashNavigation: {
    watchState: true
  },
  on: {
    slideChangeTransitionStart: function () {
      //document.querySelector('.swiper-slide-active').classList.toggle('o-0')
      // document.querySelector('.swiper-slide-active').style.opacity = "0";
    },
    slideChangeTransitionEnd: function () {
      // document.querySelector('.swiper-slide-active').style.opacity = "1";
      if (typeof window.orientation == 'undefined') {
        if (this.activeIndex === 1) {
          document.querySelector('.s-2 .info_label').classList.add('open')
          document.querySelector('.s-2 .info_label').nextElementSibling.classList.add('open')
        }
      } else {
        document.querySelector('.nav-menu-mobile').classList.remove('open')
      }
      // },
      // slideChangeTransitionEnd: function () {
      if (this.activeIndex === 9) {
        console.log('last slide')
        //this.effect = 'slide'
      }
    }
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  speed: 1200,
  mousewheel: true,
  history: false,
  allowTouchMove: true,
  direction: 'vertical',
  effect: 'fade'
});

[].forEach.call(document.querySelectorAll('.info_label'), function (element) {
  element.addEventListener('click', function () {
    toggleOpen(element)
  }, false);
});
[].forEach.call(document.querySelectorAll('.nav'), function (element) {
  element.addEventListener('click', function () {
    if (typeof window.orientation == 'undefined') {
      toggleOpen(element)
    } else {
      document.querySelector('.nav-menu-mobile').classList.toggle('open')
    }
  }, false);
});

/* Паралаксы */
var pScenes = document.getElementsByClassName('js-parallax-scene'),
  pInstances = [];
for (var i = 0; i < pScenes.length; i++) {
  pInstances.push();
  pInstances[i] = new Parallax(pScenes[i], {
    relativeInput: true,
  });
}