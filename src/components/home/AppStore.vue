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
        <div class="home-titles">
            <h1>Special Category</h1>
            <span class="title-divider"></span>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 column-gap-5 special-car">
                <div class="card-promo">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/category-image-02-446x550_t.jpg" alt="Batman">
                    <div class="special-info">
                        <h4>Batman</h4>
                        <a href="/">Shop Now</a>
                    </div>
                </div>

            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 column-gap-5 special-car">
                <div class="card-promo">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/category-image-01-446x550_t.jpg" alt="bayonetta">
                    <div class="special-info">
                        <h4>Bayonetta</h4>
                        <a href="/">Shop Now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 column-gap-5 special-car">
                <div class="card-promo">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/category-image-03-446x550_t.jpg" alt="dark souls">
                    <div class="special-info">
                        <h4>Dark Souls</h4>
                        <a href="/">Shop Now</a>
                    </div>
                </div>
            </div>

        </div>


    </section>


</template>

<style lang="scss" scoped>
@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;


.home-titles {
    font-weight: 700;
    color: white;
    text-align: center;
    margin: 30px;
    
}



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

.special-car {
    margin: 30px 0;
}

.special-info {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);    
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;

    h4 {
        color: white;
        padding: 5px 20px;
        margin-top: 10px;
    }

    a {
        color: #f8a900;
        padding: 0 20px;
    }
}



</style>