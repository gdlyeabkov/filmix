<template>
    <div>
        <TotalHeader />
        <div class="main">
            <div class="mainBody">
                <div class="mainHeader">
                    <div @click="$router.push({ name: 'Support' })" class="mainHeaderBack">
                        <span class="material-icons">
                            arrow_back
                        </span>
                        <span>
                            На главную страницу справки
                        </span>
                    </div>
                    <button @click="getPrintDialog()" class="btn printBtn">
                        <span class="material-icons">
                            print
                        </span>
                        <span>
                            ПЕЧАТЬ
                        </span>
                    </button>
                </div>
                <h1>
                    Корпоративная информация
                </h1>
                <div class="help">
                    <span>
                        Filmix предоставляет услуги пользователям из множества разных стран. Юридическое лицо, которое предоставляет Вам доступ к сервису Filmix и выступает оператором Ваших данных, зависит от страны, в которой оформлена подписка, и будет указано в электронном сообщении с подтверждением подписки или оплаты.
                    </span>
                    <h6>
                        ООО «Развлекательный онлайн-сервис»
                    </h6>
                    <span>
                        Пречистенская набережная, дом 13,
                    </span>
                    <span>
                        строение 1, этаж 3, офис 23
                    </span>
                    <span>
                        Москва, Россия
                    </span>
                    <span>
                        ОГРН: 1207700255597
                    </span>
                    <span>
                        Идентификационный номер налогоплательщика (ИНН): 9704024068
                    </span>
                    <h6>
                        Filmix International B.V.
                    </h6>
                    <span>
                        Karperstraat 8-10
                    </span>
                    <span>
                        1075 KZ Amsterdam, the Netherlands
                    </span>
                    <span>
                        KvK: 62266519
                    </span>
                    <span>
                        НДС: NL853746333B01
                    </span>
                    <span>
                        Уставный капитал: 12 500 евро
                    </span>
                    <h6>
                        Filmix, Inc.
                    </h6>
                    <span>
                        100 Winchester Circle
                    </span>
                    <span>
                        Los Gatos, CA 95032, USA
                    </span>
                    <h6>
                        Filmix Entretenimento Brasil, Ltda.
                    </h6>
                    <span>
                        Alameda Xingu, 350 - 14º andar - Alphaville Industrial
                    </span>
                    <span>
                        Barueri, CEP 06455-911 - SP - Brazil
                    </span>
                    <span>
                        CNPJ: 13.590.585/0002-70
                    </span>
                    <h6>
                        Filmix Entertainment Services India LLP
                    </h6>
                    <span>
                        Level 11, Godrej BKC, Plot C-68
                    </span>
                    <span>
                        G Block, BKC- Bandra (East)
                    </span>
                    <span>
                        Mumbai 400051, India
                    </span>
                    <h6>
                        Filmix G.K.
                    </h6>
                    <span>
                        Shin-Aoyama Tokyu Building 10F
                    </span>
                    <span>
                        3-11-13 Minami-Aoyama
                    </span>
                    <span>
                        Minato-ku
                    </span>
                    <span>
                        Tokyo 107-0062 Japan
                    </span>
                    <h6>
                        Filmix Services Korea Ltd.
                    </h6>
                    <span>
                        20F, Tower A, Centropolis Building
                    </span>
                    <span>
                        26, Ujeongguk-ro, Jongno-gu, Seoul, 03161, Republic of Korea
                    </span>
                    <h6>
                        Filmix Services UK Limited 
                    </h6>
                    <span>
                        100 New Bridge Street, London, EC4V 6JA
                    </span>
                    <span>
                        Номер компании (регистрационный):  9091899
                    </span>
                    <span>
                        Регистрационный номер плательщика налога на прибыль:  623 25810 01805 A
                    </span>
                    <h6>
                        Filmix Pte. Ltd.
                    </h6>
                    <span>
                        9 Straits View, Marina One West Tower #14-07/12, Singapore 018937
                    </span>
                    <span>
                        Регистрационный идентификационный номер 201531197W
                    </span>
                    <h6>
                        Filmix Services France S.A.S. 
                    </h6>
                    <span>
                        11 Place Édouard VII, 75009 Paris, France 
                    </span>
                    <span>
                        Учетный номер компании: 843 655 549 RCS Paris 
                    </span>
                    <h6>
                        Filmix Servicios de Transmisión España, S.L.
                    </h6>
                    <span>
                        Paseo de la Castellana 89,  28046 Madrid, Spain
                    </span>
                    <span>
                        Номер плательщика НДС / NIF  B88182514
                    </span>
                    <h6>
                        Filmix México S. de R.L. de C.V. 
                    </h6>
                    <span>
                        Prado Sur 150, Floor 4. Lomas de Chapultepec, ZC: 11000. CDMX
                    </span>
                    <span>
                        Регистрационный номер: 112483
                    </span>
                    <span>
                        RFC (налоговый идентификатор): NME110513P13
                    </span>
                </div>
            </div>
        </div>
        <Cookies :offset="240" />
    </div>
</template>

<script>
import TotalHeader from '@/components/TotalHeader.vue'
import Cookies from '@/components/Cookies.vue'

export default {
    name: 'CorporationInfo',
    methods: {
        getPrintDialog(){
            window.print()
        },
    },
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

</style>