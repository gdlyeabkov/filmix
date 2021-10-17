<template>
    <div>
        <TotalHeader />
        <div class="main">
            <div class="mainBody">
                <h1>
                    Центр поддержки
                </h1>
                <div class="help">
                    <span>
                        Сервис Filmix предоставляется вам Обществом с ограниченной ответственностью «Развлекательный онлайн-сервис» — компанией, зарегистрированной в соответствии с законодательством Российской Федерации (ОГРН 1207700255597) по адресу Российская Федерация, Москва, Пречистенская набережная, дом 13, строение 1, этаж 3, офис 23 («мы»). Сервис Filmix предоставляет персонализированную подписку на аудиовизуальные услуги, позволяющие пользователям Filmix получать доступ к интернет-трансляциям фильмов и сериалов («контент Filmix») для определенных телевизоров, компьютеров и прочих устройств, подключенных к Интернету («устройства, совместимые с сервисом Filmix»).
                    </span>
                </div>
            </div>
        </div>
        <Cookies />
    </div>
</template>

<script>
import TotalHeader from '@/components/TotalHeader.vue'
import Cookies from '@/components/Cookies.vue'

export default {
    name: 'Support',
    components: {
        TotalHeader,
        Cookies
    }
}
</script>

<style scoped>
        .main {
        background-color: rgb(255, 255, 255);
        width: 100%;
        /* height: 500px; */
    }

    .mainHeader {
        display: flex;
        justify-content: space-between;
    }

    .mainHeaderBack {
        color: rgb(255, 0, 0);
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .mainHeaderBack:hover {
        text-decoration: underline;
    }

    .mainBody {
        box-sizing: border-box;
        padding: 50px;
    }

    .printBtn {
        border: 1px solid rgb(0, 0, 0);
        display: flex;
        align-items: center;
    }

    .printBtn > span {
        font-weight: bolder;
        margin: 0px 2px;
    }

    .help {
        display: flex;
        flex-direction: column;
    }

    .warning {
        font-weight: bolder;
    }

    .link {
        color: rgb(255, 0, 0);
    }

</style>