<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import BrandsProducts from './components/reusable/BrandsProducts.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
        BrandsProducts,
    }
  }
</script>

<template>
  <AppHeader/>
  <main>
    <router-view></router-view>
  </main>
  <BrandsProducts/>
  <AppFooter/>

</template>

<style lang="scss">
@use './styles/general.scss';

</style>

