<script>
export default {
    name: 'Jumbo'
}

</script>

<template>
    <section class="container-fluid">
        <div id="jumbotron" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner main-banner">
                <div class="carousel-item active">
                <img src="//capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/main-banner-01.jpg" class="d-block w-100" alt="main slide 1">
                </div>
                <div class="carousel-item">
                <img src="//capricathemes.com/wordpress/WCM04/WCM040086/wp-content/plugins/revslider/public/assets/assets/dummy.png" class="d-block w-100" alt="Main slide 2">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

            <div class="container">
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
            left: 15%;
            z-index: 2;


        h1{
            color: white;
            padding: 10px 0;
        }

        h4 {
            background-color: #F9AA02;
            padding: 10px 5px;
            border-radius: 12px;
            text-align: center;
        }

        .ms-button {
            border-radius: 0%;
            font-weight: 500;
            margin: 10px 0;
        }
    }

</style>