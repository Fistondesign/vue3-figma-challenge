<script setup>
import { ref } from 'vue';
const props=defineProps(['title']);
let toggle = ref(false);
function handleToggle() {
    toggle.value = !toggle.value
}
</script>
<template>
    <div class="accordion">
        <section class="header" @click="handleToggle">
            <span :class="{'active':toggle,'title':!toggle}">{{ props.title }}</span>
            <img src="../../assets/icons/arrow-up.png" :class="{ 'rotate': toggle }" />
        </section>
        <section class="content" v-if="toggle">
            <slot></slot>
        </section>
    </div>
</template>
<style scoped>
.accordion {
    width: 100%;
    min-height: 50px;
    background: #F5F5F4
}

.accordion .header {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    padding: 5px;
}

.accordion .header .title {
    height: 24px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: rgba(30, 30, 30, 0.75);
}

.accordion .header .active {
    font-weight:bold;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: var(--main-bg-black);
}

.accordion .content {
    width: 100%;
    min-height: 20px;
    padding: 5px;
}

.rotate {
    transform: rotate(180deg);
}
</style>