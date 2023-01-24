
<template>
    <Mobile v-if="mobile"/>
    <Web v-else="mobile" />

</template>
<script>
import Mobile from './mobile.vue';
import Web from './web.vue';
export default {
    name: "ProductPage",
    components: {
        Mobile,
        Web,
    },
    data() {
        return {
            mobile: false
        }
    },
    beforeMount(){
        this.mobile = window.matchMedia("(max-width:400px)").matches;
    },
    mounted() {
        window.matchMedia("(max-width:400px)").addEventListener("change", this.mediaChange);
    },
    methods: {
        mediaChange() {

            this.mobile = window.matchMedia("(max-width:400px)").matches;

        }
    },
}
</script>