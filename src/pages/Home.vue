<script>
//import child components
import AppStore from '../components/home/AppStore.vue';
import Blog from '../components/home/Blog.vue';
import Jumbo from '../components/home/Jumbo.vue';
import People from '../components/home/People.vue';
import Icons from '../components/home/Icons.vue';

//importo store
import { store } from '/src/store.js'


export default {
    name: 'Home',
    components: { 
        Jumbo,
        AppStore,
        People,
        Blog,
        Icons 
    }, 
    store,
}

</script>

<template>
    <div id="app-home">
        <Jumbo/>
        <Icons/>
        <AppStore/>
        <People/>
        <Blog/>
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

#app-home {
    background-image: url('public/img/body-bg.jpg');
}
</style>