<template>
    <div class="footer">
        <hr />
        <span class="help">
            Есть вопросы? Звоните по номеру 8-800-100-9669
        </span>
        <div class="footerLinks">
            <div class="footerLinkColumn">
                <span class="footerLink">
                    Распространенные вопросы
                </span>
                <span class="footerLink">
                    Для инвесторов
                </span>
                <span class="footerLink">
                    Конфиденциальность
                </span>
                <span class="footerLink">
                    Проверка скорости
                </span>
            </div>
            <div class="footerLinkColumn">
                <span class="footerLink">
                    Центр поддержки
                </span>
                <span class="footerLink">
                    Вакансии
                </span>
                <span class="footerLink">
                    Настройки файлов cookie
                </span>
                <span class="footerLink">
                    Юридические уведомления
                </span>
            </div>
            <div class="footerLinkColumn">
                <span @click="$router.push({ name: 'Account' })" class="footerLink">
                    Аккаунт
                </span>
                <span class="footerLink">
                    Способы просмотра
                </span>
                <span class="footerLink">
                    Корпоративная информация
                </span>
                <span class="footerLink">
                    Только на Filmix
                </span>
            </div>
            <div class="footerLinkColumn">
                <span class="footerLink">
                    Медиацентр
                </span>
                <span class="footerLink">
                    Правила использования
                </span>
                <span class="footerLink">
                    Свяжитесь с нами
                </span>
            </div>
        </div>
        <div class="footerLinkColumn auxiliaryMenu">
            <div class="languageContainer">
                <span class="material-icons">
                    language
                </span>
                <select class="selector form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="Русский">
                        Русский
                    </option>
                    <option value="English">English</option>
                </select>
            </div>
            <span>
                Filmix Россия
            </span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .footer {
        position: absolute;
        height: 350px;
        left: 0px;
        width: 100%;
        top: calc(750%);
        background-color: rgb(25, 25, 25);
    }

    .footer > * {
        color: rgb(180, 180, 180);
    }

    .footerLinks {
        display: flex;
        justify-content: space-around;
    }

    .footerLinkColumn {
        display: flex;
        flex-direction: column;
        margin: 25px 0px;
    }

    .footerLink {
        
    }

    .auxiliaryMenu {
        width: 35%;
        box-sizing: border-box;
        padding: 0px 150px;
    }
    
    .help {
        margin-left: 35px;
        font-weight: bolder;
    }

    .selector {
        border: 1px solid transparent;
        outline: 1px solid rgb(50, 50, 50);
        background-color: transparent;
        color: rgb(200, 200, 200);
        width: 150px;
    }

    .languageContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 200px;
        
    }

</style>