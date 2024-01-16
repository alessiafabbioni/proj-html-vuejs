<script>
//import child components
import AppStore from '../components/home/AppStore.vue';
import Blog from '../components/home/Blog.vue';
import Jumbo from '../components/home/Jumbo.vue';
import People from '../components/home/People.vue';
import Icons from '../components/home/Icons.vue';


export default {
    name: 'Home',
    components: { 
        Jumbo,
        AppStore,
        People,
        Blog,
        Icons 
    }
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