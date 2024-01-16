<script>
export default {
    name: 'AppStore'
}

</script>

<template>
    <section class="container">
        <div class="row mt-7">
            <div class="col-lg-6 col-md-12 col-sm-12 mb-5 column-gap-5">
                <div class="card-promo">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-01.jpg" alt="most popular">
                    <div class="card-promo-info">
                        <h3>Most Popular</h3>
                        <h3>The Battlefield 4 Naval Strike</h3>

                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mb-5 column-gap-5">
                <div class="card-promo">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-02.jpg" alt="most popular">
                    <div class="card-promo-info">
                        <h3>Most Popular</h3>
                        <h3>The Battlefield 4 Naval Strike</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-7">

        </div>

    </section>


</template>

<style lang="scss" scoped>
@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;


.card-promo {
    object-fit: cover;
    position: relative;
    overflow: hidden;


}

.card-promo-info {
    position: absolute;
    top: 10%;
    right: 10%;
    width: 40%;

    h3:first-child{
        background-color: #f8a900;
        color: black;
        font-weight: 600;
    }

    h3 {
        color: white;
        font-weight: 600;
    }

    }



</style>