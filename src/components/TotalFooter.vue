<template>
    <div>
        <div :style="{ top: `${offset}%` }" class="footer">
            <div class="footerLinks">
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
                <div class="footerLinkRow">
                    <span  @click="$router.push({ name: 'Usability' })" class="footerLink">
                        Правила использования
                    </span>
                    <span @click="$router.push({ name: 'Privacy' })" class="footerLink">
                        Конфиденциальность
                    </span>
                    <span @click="$emit('openCookie')" class="footerLink">
                        Параметры файлов cookie
                    </span>
                    <span @click="$router.push({ name: 'CorporationInfo' })" class="footerLink">
                        Корпоративная информация
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TotalFooter',
    props: [
        'offset'
    ],
    emits: [
        'openCookie'
    ]
}
</script>
<style scoped>
    
    .footer {
        position: absolute;
        height: 350px;
        left: 0px;
        width: 100%;
        background-color: rgb(25, 25, 25);
    }

    .footer > * {
        color: rgb(180, 180, 180);
    }

    .footerLinks {
        display: flex;
        justify-content: space-around;
    }

    .footerLinkRow {
        display: flex;
        margin: 25px 0px;
    }

    .footerLink {
        margin: 0px 15px;
        cursor: pointer;
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