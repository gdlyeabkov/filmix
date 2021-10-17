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
        <button class="startViewBtn btn btn-danger">
          Начать смотреть
          <span class="material-icons">
            chevron_right
          </span>
        </button>
      </div>
      <div class="others">
        <div class="wathOnTv">
          <div class="watchOnTvLabel">
            <span class="watchOnTvLabelHeader">
              Смотреть на телевизоре.
            </span>
            <span class="watchOnTvLabelContent">
              Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.
            </span>
          </div>
          <div>
            <img width="500px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="">
          </div>
        </div>
        <div class="wathOnTv">
          <div>
            <img width="500px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="">
          </div>
          <div class="watchOnTvLabel">
            <span class="watchOnTvLabelHeader">
              Загружайте сериалы для просмотра офлайн.
            </span>
            <span class="watchOnTvLabelContent">
              Сохраняйте видео в избранном, и у вас всегда будет, что посмотреть.
            </span>
          </div>
        </div>
        <div class="wathOnTv">
          <div class="watchOnTvLabel">
            <span class="watchOnTvLabelHeader">
              Смотреть на телевизоре.
            </span>
            <span class="watchOnTvLabelContent">
              Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.
            </span>
          </div>
          <div>
            <img width="500px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="">
          </div>
        </div>
        <div class="wathOnTv">
          <div>
            <img width="500px" src="https://occ-0-4923-41.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" alt="">
          </div>
          <div class="watchOnTvLabel">
            <span class="watchOnTvLabelHeader">
              Создавайте профили для детей.
            </span>
            <span class="watchOnTvLabelContent">
              Подарите детям мир приключений с их любимыми героями. Он создан специально для них и уже доступен с вашей подпиской.
            </span>
          </div>
        </div>
        <div class="benefitsBlock">
          <div class="benefitsContainer">
            <span class="questions watchOnTvLabelHeader">
              Распространенные вопросы
            </span>
            <div class="benefits">
              <div class="benefit">
                <span class="watchOnTvLabelContent">
                  Что из себя представляет Netflix?
                </span>
                <span @click="faqWhatIsFilmix = !faqWhatIsFilmix" v-if="!faqWhatIsFilmix" class="readMore material-icons">
                  add
                </span>
                <span @click="faqWhatIsFilmix = !faqWhatIsFilmix" v-else class="readMore material-icons">
                  close
                </span>
              </div>
              <div class="benefit">
                <span class="watchOnTvLabelContent">
                  Сколько стоит Netflix?
                </span>
                <span @click="faqWhatIsThePriceOfFilmix = !faqWhatIsThePriceOfFilmix" v-if="!faqWhatIsThePriceOfFilmix" class="readMore material-icons">
                  add
                </span>
                <span @click="faqWhatIsThePriceOfFilmix = !faqWhatIsThePriceOfFilmix" v-else class="readMore material-icons">
                  close
                </span>
              </div>
              <div class="benefit">
                <span class="watchOnTvLabelContent">
                  Где смотреть?
                </span>
                <span @click="faqWhereToSee = !faqWhereToSee" v-if="!faqWhereToSee" class="readMore material-icons">
                  add
                </span>
                <span @click="faqWhereToSee = !faqWhereToSee" v-else class="readMore material-icons">
                  close
                </span>
              </div>
              <div class="benefit">
                <span class="watchOnTvLabelContent">
                  Как отменить подписку?
                </span>
                <span @click="faqHowDoICancelMySubscription = !faqHowDoICancelMySubscription" v-if="!faqHowDoICancelMySubscription" class="readMore material-icons">
                  add
                </span>
                <span @click="faqHowDoICancelMySubscription = !faqHowDoICancelMySubscription" v-else class="readMore material-icons">
                  close
                </span>
              </div>
              <div class="benefit">
                <span class="watchOnTvLabelContent">
                  Что можно посмотреть на Netflix?
                </span>
                <span @click="faqWhatCanYouWatchOnFilmix = !faqWhatCanYouWatchOnFilmix" v-if="!faqWhatCanYouWatchOnFilmix" class="readMore material-icons">
                  add
                </span>
                <span @click="faqWhatCanYouWatchOnFilmix = !faqWhatCanYouWatchOnFilmix" v-else class="readMore material-icons">
                  close
                </span>
              </div>
              
              <div class="benefit">
                <span class="watchOnTvLabelContent">
                  Подходит ли контент Netflix для детей?
                </span>
                <span @click="faqIsFilmixContentSuitableForKids = !faqIsFilmixContentSuitableForKids" v-if="!faqIsFilmixContentSuitableForKids" class="readMore material-icons">
                  add
                </span>
                <span @click="faqIsFilmixContentSuitableForKids = !faqIsFilmixContentSuitableForKids" v-else class="readMore material-icons">
                  close
                </span>
              </div>
              
            </div>
          </div>
          <div>
            <span class="tagline">
              Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.
            </span>
          </div>
          <div class="startBtn">
            <input placeholder="Адресс электронной почты" type="text" class="form-control">
            <button class="startViewBtn btn btn-danger">
              Начать смотреть
              <span class="material-icons">
                chevron_right
              </span>
            </button>
          </div>
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
  data(){
    return {
      faqWhatIsFilmix: false,
      faqWhatIsThePriceOfFilmix: false,
      faqWhereToSee: false,
      faqHowDoICancelMySubscription: false,
      faqWhatCanYouWatchOnFilmix: false,
      faqIsFilmixContentSuitableForKids: false,
    }
  },
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
    color: rgb(255, 255, 255);
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
    align-items: center;
    height: 500px;
    background-color: rgb(0, 0, 0);

  }
  
  .watchOnTvLabel {
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  .watchOnTvLabel > * {
    color: rgb(180, 180, 180);
  }

  .watchOnTvLabelHeader {
    font-size: 36px;
    font-weight: bolder;
  }

  .watchOnTvLabelContent {
    font-size: 24px;
    
  }
  
  .others {
    display: flex;
    flex-direction: column;
    background-color: rgb(25, 25, 25);
  }

  .others > * {
    margin-top: 25px;
  }

  .benefitsBlock {
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .benefits {
    width: 100%;
  }

  .questions {
    margin: 125px 125px 0px 125px;
    width: 100%;
    text-align: center;
  }

  .benefit {
    box-sizing: border-box;
    padding: 15px 25px;
    background-color: rgb(35, 35, 35);
    display: flex;
    justify-content: space-between;
    margin: 25px 0px;
    height: 125px;
    align-items: center;
    width: 100%;
  }

  .benefitContent {
    /* box-sizing: border-box;
    padding: 25px 35px;
    background-color: rgb(35, 35, 35);
    display: flex;
    justify-content: space-between;
    margin: 25px 0px;
    align-items: center;
    min-height: 250px;
    width: 75%; */
  }

  .benefitsContainer {
    margin: auto;
    width: 100%;
  }

  .benefitsContainer > * {
    color: rgb(255, 255, 255);
  }

  .readMore {
    font-size: 48px;
    cursor: pointer;
    user-select: none;
  }

  .startViewBtn {
    width: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }


</style>