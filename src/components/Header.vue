<template>
    <div class="header">
        <div class="logo">
            Filmix
        </div>
        <div class="btns">
            <button class="btn btn-light">
                Русский
            </button>
            <button class="btn btn-danger">
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
        width: 15%;
    }
</style>