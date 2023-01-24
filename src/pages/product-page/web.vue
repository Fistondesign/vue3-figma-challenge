<script setup>
import { ref } from 'vue';
import Header from '../../components/header/web-header.vue';
import Footer from '../../components/footer/index.vue';
import CottonSection from '../../components/cooton-section/index.vue';
import UsedFor from '../../components/used-for/index.vue';
import ProductsSection from '../../components/products-section/index.vue';
</script>

<template>
  <Header/>
  <UsedFor />
  <CottonSection />
  <ProductsSection/>
  <Footer />
</template>

<style scoped>
.web-container {
  background: red;
  min-height: 500px;
}
</style>