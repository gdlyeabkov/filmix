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
        <input v-model="subscriberEmail" placeholder="Адресс электронной почты" type="text" class="form-control">
      </div>
      <button @click="startWatch()" class="startViewBtn btn btn-danger">
        Начать смотреть
        <span class="material-icons">
          chevron_right
        </span>
      </button>
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
            <!-- <img width="100px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""> -->
            <!-- <img class="cinema" width="500px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""> -->
            <div class="cinema">
            </div>
            <div ref="currentFilm" class="film">
            </div>
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
            <!-- <img width="500px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt=""> -->
            <div class="watchAnywhere">
            </div>
            <video  ref="tizer" muted autoplay="autoplay" controls class="tizer">
              <source src="https://r1---sn-4g5lznez.googlevideo.com/videoplayback?expire=1634557487&ei=zwltYeDQF8TjyAX89r-gBg&ip=114.31.28.26&id=o-ALkxVXyBGR5oN5PppgvkYoHwOZ_WwBQePWJo90oovwEH&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=I042AKpmDEz_2A_7m8Bt4hYG&gir=yes&clen=10942240&ratebypass=yes&dur=160.589&lmt=1540999108292809&fexp=24001373,24007246&c=WEB&txp=5431432&n=xmV3-Tet2vwWOX9fV&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAOMVPp0KNC5viTR4Jh8Xl51yd5YM8U6C3vDaf-WmkOELAiAJkU312INr_BjWnf7gLATUfZ30K19I3MU50enwSesT0A%3D%3D&rm=sn-cqjvh-q5jl7e&req_id=f325f02ec21ea3ee&redirect_counter=2&cm2rm=sn-cvhly7e&cms_redirect=yes&mh=me&mip=95.183.71.87&mm=34&mn=sn-4g5lznez&ms=ltu&mt=1634535630&mv=m&mvi=1&pl=21&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgdtzoLhu_RUt16ll4z6Emzl_wtGpGdkrwzIeGKqDOuHMCIQCyram_NYucMOhf-hUq4-i0XvzHweCTQXZL7eGMtAP2_w%3D%3D" />
            </video>
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
      cursorOfFilms: 0,
      subscriberEmail: ''
    }
  },
  mounted(){
    setInterval(() => {
      this.cursorOfFilms++
      if(this.cursorOfFilms === 0) {
        this.$refs.currentFilm.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/The_Haunting_film.jpg/220px-The_Haunting_film.jpg')`
      } else if(this.cursorOfFilms === 1) {
        this.$refs.currentFilm.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/en/5/5e/Sierra_Burgess_Is_a_Loser.png')`
      } else if(this.cursorOfFilms === 2) {
        this.$refs.currentFilm.style.backgroundImage = `url('https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/15b263f9-afa3-4c76-94b5-d1b62ccdf1e0/300x450')`
      } else if(this.cursorOfFilms === 3) {
        this.$refs.currentFilm.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/en/thumb/2/23/LikeFatherPoster.jpeg/220px-LikeFatherPoster.jpeg')`
      } else if(this.cursorOfFilms === 4) {
        this.$refs.currentFilm.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/ru/thumb/0/0a/%D0%AF%D1%80%D0%BA%D0%BE%D1%81%D1%82%D1%8C_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/203px-%D0%AF%D1%80%D0%BA%D0%BE%D1%81%D1%82%D1%8C_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg')`
      } else if(this.cursorOfFilms === 5) {
        this.$refs.currentFilm.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/en/8/87/Nappily_Ever_After.png')`
        this.cursorOfFilms = -1
      }
    }, 2500)

    // setTimeout(() => {
    //   this.$refs.tizer.play()
    // }, 5000)

  },
  methods: {
    startWatch() {
      fetch(`http://localhost:4000/api/subscribers/create/?subscriberemail=${this.subscriberEmail}`, {
        mode: 'cors',
        method: 'GET'
      }).then(response => response.body).then(rb  => {
          const reader = rb.getReader()
          return new ReadableStream({
          start(controller) {
              function push() {
              reader.read().then( ({done, value}) => {
                  if (done) {
                  console.log('done', done);
                  controller.close();
                  return;
                  }
                  controller.enqueue(value);
                  console.log(done, value);
                  push();
              })
              }
              push();
          }
          });
      }).then(stream => {
        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
      })
      .then(result => {
        console.log(`JSON.parse(result).status: ${JSON.parse(result).status}`)
        if(JSON.parse(result).status.includes('OK')) {
          alert('Вам было отправлено письмо на почту')
        } else if(JSON.parse(result).status.includes('Error')) {
          alert('Ошибка оформления подписки')
        }
      })

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

  .cinema {
    background-image: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png");
    width: 570px;
    height: 427px;
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 85 !important;
    margin-top: 200px;
  }

  .film {
    background-size: 100% 100%;
    width: 465px;
    height: 265px;
    background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/The_Haunting_film.jpg/220px-The_Haunting_film.jpg');
    position: relative;
    top: -328px;
    left: 85px;
    z-index: 2 !important;
  }
  
  .watchAnywhere {
    background-image: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png");
    width: 570px;
    height: 427px;
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 85;
  }

  .tizer {
    background-size: 100% 100%;
    width: 390px;
    height: 265px;
    position: relative;
    top: -390px;
    left: 120px;
    z-index: 2;
  }

</style>