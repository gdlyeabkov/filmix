<template>
    <div>
        <div v-if="opened" class="backdrop">
            <div class="cookieBlock">
                <div class="cookieBlockRow">
                    <div class="cookieBlockLogo">
                        <div class="logo">
                            Filmix
                        </div>
                        <span class="cookieBlockHeader">
                            Центр настроек конфиденциальности
                        </span>
                    </div>
                    <span @click="opened = false" class="clickable material-icons">
                        close
                    </span>
                </div>
                <hr />
                <div class="cookieBlockRow">
                    <div class="cookieBlockColumn">
                        
                        <div @click="asideBlock = 'Общее описание'" :class="{ asideItemSelected: asideBlock.includes('Общее описание'), asideItem: !asideBlock.includes('Общее описание') }">
                            <div v-if="asideBlock.includes('Общее описание')" class="selectedArticledMarker">
                                &nbsp;
                            </div>
                            <span>
                                Общее описание
                            </span>
                        </div>
                        
                        <div @click="asideBlock = 'Обязательные файлы cookie'" :class="{ asideItemSelected: asideBlock.includes('Обязательные файлы cookie'), asideItem: !asideBlock.includes('Обязательные файлы cookie') }">
                            <div v-if="asideBlock.includes('Обязательные файлы cookie')" class="selectedArticledMarker">
                                &nbsp;
                            </div>
                            <span>
                                Обязательные файлы cookie
                            </span>
                        </div>
                        
                        <div @click="asideBlock = 'Файлы cookie для эффективности и функциональности'" :class="{ 'asideItemSelected': asideBlock.includes('Файлы cookie для эффективности и функциональности'), 'asideItem': !asideBlock.includes('Файлы cookie для эффективности и функциональности') }">
                            <div v-if="asideBlock.includes('Файлы cookie для эффективности и функциональности')" class="selectedArticledMarker">
                                &nbsp;
                            </div>
                            <span>
                                Файлы cookie для эффективности и функциональности
                            </span>
                        </div>
                        
                        <div @click="asideBlock = 'Рекламные файлы cookie'" :class="{ 'asideItemSelected': asideBlock.includes('Рекламные файлы cookie'), 'asideItem': !asideBlock.includes('Рекламные файлы cookie') }">
                            <div v-if="asideBlock.includes('Рекламные файлы cookie')" class="selectedArticledMarker">
                                &nbsp;
                            </div>
                            <span>
                                Рекламные файлы cookie
                            </span>
                        </div>
                        
                    </div>
                    <div class="scrollable">
                        <div class="scrollableBar" v-if="asideBlock.includes('Общее описание')">
                            <h6>
                                Общее описание
                            </h6>
                            <span class="scrollableContent">
                                <span>
                                    Настоящий инструмент файлов cookie поможет Вам разобраться в том, кем именно используются файлы cookie для сбора информации с Вашего устройства, с какой целью используется эта информация и каким образом можно управлять использованием файлов cookie в отношении неосновных действий.
                                </span>
                                <span>
                                    Netflix поддерживает Принципы саморегулирования для поведенческой интернет-рекламы Альянса цифровой рекламы (DAA), Альянса цифровой рекламы Канады (DAAC) и Европейского альянса интерактивной цифровой рекламы (EDAA).
                                </span>
                                <span>
                                    Если Вы откажетесь от использования рекламных файлов cookie, Вы по-прежнему сможете видеть рекламу Netflix на других сайтах, однако такая реклама не будет персонализирована нами или нашими провайдерами услуг для Вас, а мы продолжим отправлять Вам персональные предложения при использовании нашего веб-сайта на основе информации из файлов cookie, от которых Вы не отказались.
                                </span>
                                <span>
                                    В качестве альтернативного варианта в большинстве браузеров можно задать настройки конфиденциальности таким образом, чтобы запретить Вашему браузеру принимать новые файлы cookie, уведомлять Вас, когда Вы получаете новые файлы cookie, или совсем отключить все файлы cookie. Если браузер настроен таким образом, чтобы не принимать файлы cookie, Вам не будет показываться реклама на основе Ваших интересов, однако использование Вами сервиса Netflix может быть затруднено или невозможно. Кроме того, если Вы отказываетесь с помощью нашего инструмента выбора файлов cookie от определенных файлов cookie, Ваши настройки сохранятся путем записи файла cookie на Вашем устройстве. Таким образом, важно, чтобы Ваш браузер принимал файлы cookie, иначе Ваши настройки не будут применены. Если Вы удалите или очистите файлы cookie, а также если Вы измените используемый веб-браузер, Вам нужно будет снова задать настройки файлов cookie.
                                </span>
                                <span>
                                    Обратите внимание, что иногда список файлов cookie, указанный в инструменте выбора файлов cookie, может не совпадать с файлами cookie, используемыми в действительности. Например, мы используем файлы cookie для Facebook, Twitter и Google не во всех регионах.
                                </span>
                                <span>
                                    Дополнительную информацию об использовании нами файлов cookie см. в разделе Файлы cookie и интернет-реклама нашего Положения о конфиденциальности.
                                </span>
                            </span>
                        </div>
                        <div v-else-if="asideBlock.includes('Обязательные файлы cookie')">
                            <h6>
                                Обязательные файлы cookie
                            </h6>
                            <span class="scrollableContent">
                                <span>
                                    Эти файлы cookie необходимы для работы нашего веб-сайта или онлайн-сервисов. Например, мы и наши Поставщики услуг можем использовать эти файлы cookie для аутентификации и идентификации посетителей во время использования ими наших веб-сайтов и приложений так, чтобы мы могли оказывать им услуги. Они также помогают нам обеспечить соблюдение Правил использования, предупреждать мошеннические действия и обеспечивать безопасность наших сервисов.
                                </span>
                                <span>
                                    Срок действия: большинство файлов cookie действуют в течение одной сессии (они активны только до тех пор, пока Вы не закроете браузер) или в течение суток. Некоторые файлы cookie остаются активными в течение более длительного времени: от 3 до 12 месяцев. Файлы cookie, которые используются для предупреждения мошеннических действий и обеспечения безопасности наших сервисов, остаются активными максимум в течение 24 месяцев.
                                </span>
                            </span>
                        </div>
                        <div v-else-if="asideBlock.includes('Файлы cookie для эффективности и функциональности')">
                            <h6>
                                Файлы cookie для эффективности и функциональности
                            </h6>
                            <span class="scrollableContent">
                                <span>
                                    Эти файлы cookie помогают нам улучшать и персонализировать Ваши впечатления от использования Netflix в интернете. Например, они позволяют нам запоминать Ваши настройки и исключить необходимость повторного ввода ранее предоставленной информации (например, во время регистрации пользователя). Мы также используем эти файлы cookie для сбора информации (в частности, популярных страниц, коэффициентов конверсии, привычек просмотра, переходов по ссылкам и другой информации) об использовании сервиса Netflix нашими посетителями. Таким образом, мы получаем возможность улучшать и персонализировать наш веб-сайт и сервис, а также проводить исследование рынка. Удаление подобных типов файлов cookie может привести к ограничению функциональности нашего сервиса.
                                </span>
                                <span>
                                    Срок действия: большая часть файлов cookie активна только в течение суток. Некоторые файлы cookie остаются активными в течение более длительного времени: от 3 до 12 месяцев.
                                </span>
                            </span>
                        </div>
                        <div v-else-if="asideBlock.includes('Рекламные файлы cookie')">
                            <h6>
                                Рекламные файлы cookie
                            </h6>
                            <span class="scrollableContent">
                                <span>
                                    Эти файлы cookie используют информацию о Вашем взаимодействии с этим и иными веб-сайтами и приложениями, Вашей реакции на рекламу и электронные сообщения в целях показа более подходящей для Вас рекламы, а также в целях анализа и оптимизации. Такие типы рекламы называются «персонализированной рекламой», которая отображается за пределами домена Netflix. Netflix применяет договорные и технические меры, выработанные для предупреждения доступа рекламных партнеров к информации о выбираемом Вами контенте, URL-адресах сайтов, на которые Вы заходите, или фильмах и сериалах, которые Вы просматривали с помощью нашего сервиса. Мы не делимся информацией о выбираемом Вами контенте или просматриваемых с помощью нашего сервиса фильмах и сериалах. Рекламные файлы cookie, связанные с нашим сервисом, принадлежат рекламным партнерам, которые перечислены в подробной информации о файлах cookie. Выберите настройки для рекламных файлов cookie ниже. Если вы хотите отказаться от рекламных файлов cookie на всех веб-сайтах, перейдите сюда.
                                </span>
                                <span>
                                    Обратите внимание, что иногда список файлов cookie, указанный в инструменте выбора файлов cookie, может не совпадать с файлами cookie, используемыми в действительности. Например, мы используем файлы cookie для Facebook, Twitter и Google не во всех регионах.
                                </span>
                                <span>
                                    Подробная информация о файлах cookie
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="cookieBlockRow">
                    <span>
                        Powerd by 
                        <span class="oneTrust">
                            OneTrust
                        </span>
                    </span>
                    <button class="btn btn-danger">
                        Сохранить настройки
                    </button>
                </div>
            </div>
        </div>
        <TotalFooter :offset="offset" @openCookie="openCookieHandler" />
    </div>
</template>

<script>
import TotalFooter from '@/components/TotalFooter.vue'
export default {
    name: 'Cookies',
    data(){
        return {
            opened: false,
            asideBlock: 'Общее описание'
        }
    },
    methods: {
        openCookieHandler(){
            this.opened = true
        }
    },
    props: [
        'offset'
    ],
    components: {
        TotalFooter
    }
}
</script>
<style scoped>
    
    .cookieBlock {
        width: 65%;
        height: 90%;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        border: 1px solid rgb(200, 200, 200);
        box-sizing: border-box;
        padding: 15px;
        position: fixed;
        top: calc(7%);
        left: calc(15%);
        z-index: 10;
    }

    .scrollable {
        overflow-y: scroll;
        height: 250px;
        width: 65%;
    }

    .scrollableContent {
        font-size: 12px;
        overflow-y: scroll;
        height: 100px;
    }

    .cookieBlockRow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }

    .oneTrust {
        color: rgb(0, 200, 0);
        font-weight: bolder;
    }

    .asideItem {
        cursor: pointer;
        background-color: rgb(200, 200, 200);
        width: 100%;
        height: 75px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: right;
    }

    .asideItemSelected {
        cursor: pointer;
        border-bottom: 1px solid rgb(175, 175, 175);
        width: 100%;
        height: 75px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .selectedArticledMarker {
        background-color: rgb(255, 0, 0);
        width: 5px;
        height: 100%;
    }
    
    .logo {
        color: rgb(255, 0, 0);
        font-size: 36px;
        font-weight: bolder;
        /* perspective: 1500px;
        -webkit-perspective: 500px;
        transform: skewY(335px); */
    }

    .cookieBlockHeader {
        width: 50%;
        margin-left: 50px;
        font-size: 20px;
        font-weight: bolder;
    }

    .cookieBlockLogo {
        display: flex;
    }

    .cookieBlockColumn {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .scrollableBar {
        /* overflow-y: scroll; */
    }

    .clickable {
        cursor: pointer;
    }

    .backdrop {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 5;
    }

</style>