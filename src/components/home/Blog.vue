<script>
export default {
    name: 'Blog'
}

</script>

<template>
    <section class="container">
        <div class="home-titles">
            <h1>New Game Blogs</h1>
            <span class="title-divider"></span>
        </div>
        <div class="row pb-5">
            <div class="col-lg-4 col-md-12 col-sm-12 column-gap-5 special-car">
                <div class="card-promo">
                    <img src="//capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/Nisi-ut-aliquid-ex-ea-com-1400x878_t.jpg" alt="Batman">
                    <div class="row">
                        <div class="col-4  mt-3">
                            <i class="fa fa-calendar pe-2"></i>
                            <span>May 30, 2021</span>
                        </div>
                        <div class="col-4  mt-3">
                            <i class="fa fa-comments-o pe-2"></i>
                            <span>0 Comment</span>
                        </div>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
                    </div>
                </div>

            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 column-gap-5 special-car">
                <div class="card-promo">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/Architecto-beatae-vitae-dicta-1400x878_t.jpg" alt="bayonetta">
                    <div class="row">
                        <div class="col-4  mt-3">
                            <i class="fa fa-calendar pe-2"></i>
                            <span>May 30, 2021</span>
                        </div>
                        <div class="col-4  mt-3">
                            <i class="fa fa-comments-o pe-2"></i>
                            <span>0 Comment</span>
                        </div>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 column-gap-5 special-car">
                <div class="card-promo">
                    <img src="//capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/At-vero-eos-et-accusamus-1400x878_t.jpg" alt="dark souls">
                    <div class="row">
                        <div class="col-4  mt-3">
                            <i class="fa fa-calendar pe-2"></i>
                            <span>May 30, 2021</span>
                        </div>
                        <div class="col-4  mt-3">
                            <i class="fa fa-comments-o pe-2"></i>
                            <span>0 Comment</span>
                        </div>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>

.card-promo {
    position: relative;
    overflow: hidden;
    max-height: auto;

    img {
        object-fit: cover;
        width: 100%;

    }

    span {
        color: #A6A6A6;
    }

    i {
        color: #F8A900;
    }

    h5{
        color: white;
        padding: 1rem;
    }
}

.special-car {
    margin: 30px 0;
}


</style>