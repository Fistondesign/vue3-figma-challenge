<script setup>
import { ref } from 'vue';
    const props=defineProps(['color']);
</script>
<template>
    <div class="container" :style="{backgroundColor:props.color}" ></div>
</template>
<style>
.container{
    width:24px;
    height:24px;
    border-radius:50%;
    padding:1px;
    border: 2px solid #D8D8D8;
}
</style>
