
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
            mobile: false,
            size:'800'
        }
    },
    beforeMount(){
        this.mediaChange()
    },
    mounted() {
        window.matchMedia(`(max-width:${this.size}px)`).addEventListener("change", this.mediaChange);
    },
    methods: {
        mediaChange() {

           this.mobile = window.matchMedia(`(max-width:${this.size}px)`).matches;

        }
    },
}
</script>