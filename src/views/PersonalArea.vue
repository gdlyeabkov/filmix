<template>
    <div>
        <Header />
            <div>
                <span>
                    Личный кабинет
                </span>
                <div class="theater">
                    <video ref="tizer" muted autoplay="autoplay" controls class="tizer">
                        <source src="https://r1---sn-4g5lznez.googlevideo.com/videoplayback?expire=1634557487&ei=zwltYeDQF8TjyAX89r-gBg&ip=114.31.28.26&id=o-ALkxVXyBGR5oN5PppgvkYoHwOZ_WwBQePWJo90oovwEH&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=I042AKpmDEz_2A_7m8Bt4hYG&gir=yes&clen=10942240&ratebypass=yes&dur=160.589&lmt=1540999108292809&fexp=24001373,24007246&c=WEB&txp=5431432&n=xmV3-Tet2vwWOX9fV&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAOMVPp0KNC5viTR4Jh8Xl51yd5YM8U6C3vDaf-WmkOELAiAJkU312INr_BjWnf7gLATUfZ30K19I3MU50enwSesT0A%3D%3D&rm=sn-cqjvh-q5jl7e&req_id=f325f02ec21ea3ee&redirect_counter=2&cm2rm=sn-cvhly7e&cms_redirect=yes&mh=me&mip=95.183.71.87&mm=34&mn=sn-4g5lznez&ms=ltu&mt=1634535630&mv=m&mvi=1&pl=21&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgdtzoLhu_RUt16ll4z6Emzl_wtGpGdkrwzIeGKqDOuHMCIQCyram_NYucMOhf-hUq4-i0XvzHweCTQXZL7eGMtAP2_w%3D%3D" />
                    </video>
                </div>
            </div>
        <Footer :offset="20" />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'PersonalArea',
    components: {
        Header,
        Footer,
    }
}
</script>

<style>

    .tizer {
        margin: auto;
        width: 85%;
    }

    .theater {
        display: flex;
        justify-content: center;
    }


</style>