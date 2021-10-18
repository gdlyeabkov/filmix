<template>
    <div>
        <AccountHeader />
        <div class="authForm">
            <h1 class="authFormHeader">Войти</h1>
            <input v-model="subscriberEmail" type="text" placeholder="Адрес электронной почты или номер телефона" class="authFormControl form-control" />
            <input v-model="subscriberPassword" type="password" placeholder="Пароль" class="authFormControl form-control" />
            <div class="authFormBtnContainer">
                <button @click="login()" class="authFormBtn btn btn-danger">
                    Войти
                </button>
            </div>
            <div class="errorsContainer">
                <span class="errors">
                    {{ errors }}
                </span>
            </div>
            <div class="authFormBtnContainer">
                <div>
                    <input type="checkbox" class="authFormCheckbox" />
                    <label class="authFormLabel">Запомнить меня</label>
                </div>
                <span class="authFormLabel needHelp">Нужна помощь?</span>
            </div>
            <div>
                <img width="20px" src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="">
                <span class="loginDrivenFacebook">
                    Войдите через Facebook
                </span>
            </div>
            <div class="authFormMore">
                <span class="firstlyFilmix">
                    Впервые на Netflix?
                </span>
                <span class="registerNow">
                    Зарегистрируйтесь сейчас.
                </span>
                <span class="googleReCaptcha">
                    Эта страница защищена Google reCAPTCHA, чтобы мы знали, что вы не бот. 
                    <span @click="details = true" class="more">
                        Подробнее.
                    </span>
                </span>
                <span class="googleReCaptcha" v-if="details">
                    На информацию, собираемую службой Google reCAPTCHA, распространяются 
                    <span @click="getPolicy()" class="more">
                        Политика конфиденциальности
                    </span>
                     и 
                    <span @click="getUsability()" class="more">
                        Условия использования
                    </span>
                     Google. Эта информация используется для предоставления, обслуживания и совершенствования службы reCAPTCHA, а также в целях обеспечения безопасности (для показа персонализированной рекламы Google она не используется).
                </span>
            </div>
        </div>
        <AccountFooter />
    </div>
</template>

<script>
import AccountHeader from '@/components/AccountHeader.vue'
import AccountFooter from '@/components/AccountFooter.vue'

export default {
    name: 'Account',
    data(){
        return {
            details: false,
            subscriberEmail: '',
            subscriberPassword: '',
            errors: ''
        }
    },
    methods: {
        login(){
            console.log('вхожу')
            fetch(`http://localhost:4000/api/subscribers/check/?subscriberemail=${this.subscriberEmail}&subscriberpassword=${this.subscriberPassword}`, {
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
                    this.$router.push({ name: 'PersonalArea' })
                } else if(JSON.parse(result).status.includes('Error')) {
                    this.errors = 'Ошибка входа'
                }
            })
        },
        getUsability(){
            window.open('https://policies.google.com/privacy')
        },
        getPolicy(){
            window.open('https://policies.google.com/privacy')
        },
    },
    components: {
        AccountHeader,
        AccountFooter
    }
}
</script>
<style scoped>
    
    .authForm {
        width: 35%;
        height: 575px;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 5px;
        margin: auto;
        box-sizing: border-box;
        padding: 25px;
    }

    .authFormControl {
        color: rgb(150, 150, 150);
        background-color: rgba(50, 50, 50);
        border: 0px solid transparent;
        width: 325px;
        margin: 15px auto;
    }

    .authFormHeader {
        color: rgb(255, 255, 255);
        margin-left: 50px;
    }

    .authFormBtn {
        width: 325px;
        margin: auto;
        text-align: center;
    }

    .authFormBtnContainer {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    .authFormCheckbox {
        color: rgb(150, 150, 150);
        margin-right: 5px;
    }

    .authFormLabel {
        color: rgb(200, 200, 200);
        font-weight: bolder;
    }

    .authFormMore {
        display: flex;
        flex-direction: column;
    }

    .more {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .more:hover {
        text-decoration: underline;
    }

    .googleReCaptcha {
        font-size: 12px;
        width: 65%;
        margin: auto;
        color: rgb(150, 150, 150);
    }

    .firstlyFilmix {
        color: rgb(150, 150, 150);
        font-weight: bolder;
        margin: auto;
    }

    .registerNow {
        color: rgb(255, 255, 255);
        font-weight: bolder;
        margin: auto;
        cursor: pointer;
    }

    .registerNow:hover {
        text-decoration: underline;
    }

    .loginDrivenFacebook {
        color: rgb(150, 150, 150);
        font-weight: bolder;
        margin: auto;
        font-size: 14px;
        margin-left: 15px;
    }

    .needHelp:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .errorsContainer {
        display: flex;
        justify-content: center;
    }

    .errors {
        font-weight: bolder;
        color: rgb(150, 0, 0);
        font-size: 24px;
    }

</style>