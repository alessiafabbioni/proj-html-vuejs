<script>
export default {
    name: 'People'
}

</script>

<template>
    <section>
        <div id="people-carousel" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active people-carousel">
                    <img src="/public/img/parallax.jpg" class="d-block w-100" alt="person image">
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
                <div class="people-info">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/11/t5-1-100x100_left.jpg" alt="quote">
                    <div class="row">
                        <div class="col-4 offset-4 d-flex flex-row">
                            <h6 class="col justify-content-end">Maria Rossi</h6>
                            <h6 class="col web-des justify-content-start">(Web Designer)</h6>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium ad amet commodi est, hic soluta voluptates vel praesentium minus molestias numquam, delectus quis enim et neque nisi molestiae id?</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;


#people-carousel {
    max-height: 700px;
    position: relative;
    overflow: hidden;

    .people-info {
        position: absolute;
        text-align: center;
        top: 30%;
        left: 35%;
        max-width: 30%;

        h6{
            color:white;
            padding: 10px 0;
        }

        .web-des{
            color: #f8a900;
        }


        p{
            color: #BFBFBD;
        }

        


        img {
            border-radius: 100%;
            border: solid 2px #f8a900;
        }


    }
}



</style>