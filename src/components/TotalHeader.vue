<template>
    <div class="header">
        <div>
            <span class="logo">
                Filmix
            </span>
            <span class="breadcrumbs">
                | Центр поддержки
            </span>
        </div>
        <div class="btns">
            <button class="arrangeBtn btn btn-dark">
                Оформить подписку Filmix
            </button>
            <button @click="$router.push({ name: 'Account' })" class="btn btn-danger">
                Войти
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px;
        background-color: rgb(0, 0, 0);
    }

    .logo {
        color: rgb(255, 0, 0);
        font-size: 36px;
        font-weight: bolder;
        /* perspective: 1500px;
        -webkit-perspective: 500px;
        transform: skewY(335px); */
    }

    .btns {
        display: flex;
        justify-content: space-between;
        width: 35%;
    }

    .btns > button {
        height: 40px;
        padding: 0px 35px;
        margin: 15px;
    }

    .breadcrumbs {
        color: rgb(255, 255, 255);
        font-size: 18px;
        font-weight: bolder;
    }

    .arrangeBtn {
        background-color: transparent;
        outline: 1px solid rgb(255, 255, 255);
        font-weight: bolder;
    }

</style>