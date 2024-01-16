<script>
export default {
    name: 'Jumbo'
}

</script>

<template>
    <section class="container-fluid">
        <div class="jumbo">
            <div class="main-banner">
                <img src="//capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/main-banner-01.jpg" alt="main banner">
                <div class="jumbo-info">
                    <h4>Upcoming Stock</h4>
                    <h1>Resident Evil 3 <br>
                        Remake</h1>
                    <button type="button" class="btn btn-light ms-button">Shop Now</button>

                </div>
            </div>
            

        </div>


        
    </section>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;

.main-banner {
        position: relative;
        width: 100%;
        max-height: 600px;
        overflow: hidden;
        object-fit: cover;
        margin: 0 auto;

    }

.jumbo-info{
            position: absolute;
            top: 25%;
            left: 25%;
            z-index: 2;


        h1{
            color: white;
            padding: 10px 0;
        }

        h4 {
            background-color: #F9AA02;
            padding: 10px 5px;
        }

        .ms-button {
            border-radius: 0%;
            font-weight: 500;
            margin: 10px 0;
        }
    }

</style>