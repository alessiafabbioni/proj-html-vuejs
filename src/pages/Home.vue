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
    data () {
        return {
            loading: true,

        }
    },
    

    mounted() {
    // Hide the loading container when the DOM content is fully loaded
    setTimeout(() => {
            this.loading = false;
        }, 3000);
    },
    store,
}

</script>

<template>
    <div id="app-home">
        <div v-if="loading" id="loading-container">
            <img src="/public/img/loading.gif" alt="Loading...">
        </div>
        <div v-if="!loading">

        </div>
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
    position: relative;
}


#loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #170F1F;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; 
}

#loading-container img {
  width: 50px; /* Adjust the width of your loading image */
  height: 50px; /* Adjust the height of your loading image */
}
</style>