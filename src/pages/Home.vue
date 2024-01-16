<script>
//import child components
import AppStore from '../components/home/AppStore.vue';
import Blog from '../components/home/Blog.vue';
import Jumbo from '../components/home/Jumbo.vue';
import People from '../components/home/People.vue';


export default {
    name: 'Home',
    components: { 
        Jumbo,
        AppStore,
        People,
        Blog 
    }
}

</script>

<template>
<Jumbo/>
<AppStore/>
<People/>
<Blog/>

</template>

<style lang="sass" scoped>

</style>