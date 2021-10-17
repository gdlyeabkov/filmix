<template>
  <div>
    <Header />
    <div>
      <div class="taglines">
        <span class="mainTagline">
          Фильмы, сериалы и многое другое без ограничений.
        </span>
        <span class="tagline">
          Смотрите где угодно. Отменить подписку можно в любое время.
        </span>
        <span class="tagline">
          Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.
        </span>
      </div>
      <div class="startBtn">
        <input placeholder="Адресс электронной почты" type="text" class="form-control">
        <button class="btn btn-danger">
          Начать смотреть
        </button>
      </div>
      <div class="wathOnTv">
        <div class="watchOnTvLabel">
          <span class="watchOnTvLabelHeader">
            Смотреть на телевизоре.
          </span>
          <span>
            Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.
          </span>
        </div>
        <div>
          <img width="325px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="">
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
  .taglines {
    width: 35%;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .taglines > * {
    color: rgb(255, 255, 255);
    margin: 15px 0px;
  }

  .mainTagline {
    font-size: 36px;
    font-weight: bolder;
  }

  .tagline {
    font-size: 20px;
  }

  .startBtn {
    display: flex;
    height: 50px;
    width: 75%;
    margin: auto;
  }

  .startBtn > button {
    width: 35%;
    margin-left: 2px;
  }

  .wathOnTv {
    display: flex;
    justify-content: space-around;
    height: 500px;
    background-color: rgb(25, 25, 25);

  }
  
  .watchOnTvLabel {
    display: flex;
    flex-direction: column;
  }

  .watchOnTvLabel > * {
    color: rgb(180, 180, 180);
  }

  .watchOnTvLabelHeader {
    font-size: 24px;
    font-weight: bolder;
  }

</style>