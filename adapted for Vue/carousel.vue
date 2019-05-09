<template>
  <div>
    <div class="mw-438 center cc">
      <div class="swiper-container swiper-small center">
        <div class="swiper-wrapper">

          <a v-for="(it, ind) in group" :key="ind" href="#"
             class="swiper-slide swiper-small--container db color-inherit link dim">
            <img :src="it.image"
                 options="size=120x130&bgcolor=#ccc&color=#f0f0f0&text=Product 1"
                 class="mb-10 db small-slider-pic placeholder"
            >
            <div class="carousel-txt">
              <div class="carousel-txt-title">{{it.title}}</div>
              <div class="carousel-txt-description">{{it.description}}</div>
            </div>
          </a>
        </div>
        <div class="swiper-button-prev swiper-small-prev"></div>
        <div class="swiper-button-next swiper-small-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'group'
    ],
    data() {
      return {
        carouselGroup: [
          {
            image: 'http://localhost:8080/imgs/beauty_2.svg',
            title: 'Vince-1',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_1.svg',
            title: 'Vince-2',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_1.svg',
            title: 'Vince-3',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_2.svg',
            title: 'Vince-4',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_1.svg',
            title: 'Vince-5',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_2.svg',
            title: 'Vince-6',
            description: 'Скидка 77!'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_1.svg',
            title: 'Vince-3',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_2.svg',
            title: 'Vince-4',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_1.svg',
            title: 'Vince-5',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_1.svg',
            title: 'Vince-5',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_2.svg',
            title: 'Vince-6',
            description: 'Скидка 77!'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_1.svg',
            title: 'Vince-3',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_2.svg',
            title: 'Vince-4',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_1.svg',
            title: 'Vince-5',
            description: 'cкидка 70%'
          },
          {
            image: 'http://localhost:8080/imgs/beauty_2.svg',
            title: 'Vince-6',
            description: 'Скидка 77!'
          }
        ]
      }
    },
    mounted() {
      var swiperSmall = new Swiper('.swiper-small', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-small-next',
          prevEl: '.swiper-small-prev',
        },
      })
    }
  }
</script>

<style scoped>
  /**
 * Swiper 4.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 */
  /*необходимо обязательно прописать в <head> у index.html 2 нижеуказанных файла, которые необходимо положить в
  pablic/carousel/  */
  /*<<link rel="stylesheet" href="/carousel/swiper.min.css">*/
  /*<script src="/carousel/swiper.min.js"></script>*/
  /*а без <script src="/carousel/placeholder.min.js"></script> - все работает  ... */

  /*image: 'http://localhost:8080/imgs/beauty_2.svg' - в проекте лежат в папке pablic/imgs/beauty_2.svg*/


  .mw-438 {
    max-width: 438px;
  }

  .mb-10 {
    margin-bottom: 10px;
    width: 120px;
    height: 135px;
    background-color: #999999;
  }

  .swiper-small {
    width: 400px;
    height: 100%;
    padding-left: 18px;
    padding-right: 20px;
  }

  .swiper-small--container {
    max-width: 300px;
  }

  .swiper-small-prev,
  .swiper-small-next {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 10'%3E%3Ccircle cx='5' cy='5' r='5' fill='black'/%3E%3C/svg%3E");
    background-size: 6px;
    transition: transform 1s;
    width: 30px;
    height: 50px;
    top: 65px;
  }

  .swiper-small-prev {
    left: -7px;
  }

  .swiper-small-next {
    right: -6px;
  }

  .swiper-small-prev:hover,
  .swiper-small-next:hover {
    transform: scale(1.9)
  }
  .carousel-txt{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .carousel-txt-title{
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 800;
    line-height: 12px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
  }

  .carousel-txt-description{
    margin-top: 3px;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    text-align: center;
    color: #000000;
  }

</style>
