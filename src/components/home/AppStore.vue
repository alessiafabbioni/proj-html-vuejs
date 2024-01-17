<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
    name: 'AppStore',
    data(){
        return {
            products: [
            {
                name: "Wireless Mouse",
                price: 45.99,
                discounted: 22.50,
                rating: 3.8,
                tag: "sale",
                image: "../../../public/img/01.jpg"
            },
            {
                name: "Mechanical Keyboard",
                price: 109.99,
                discounted: 78.25,
                rating: 4.1,
                tag: "bestseller",
                image: "../../../public/img/02.jpg"
            },
            {
                name: "Gaming Monitor",
                price: 279.99,
                discounted: null,
                rating: 2.9,
                tag: "featured",
                image: "../../../public/img/03.jpg"
            },
            {
                name: "RGB Gaming Chair",
                price: 199.99,
                discounted: 85.60,
                rating: 4.3,
                tag: "new arrival",
                image: "../../../public/img/04.jpg"
            },
            {
                name: "Gaming Laptop",
                price: 1299.99,
                discounted: null,
                rating: 4.7,
                tag: "featured",
                image: "../../../public/img/05.jpg"
            },
            {
                name: "Gaming Mouse Pad",
                price: 19.99,
                discounted: null,
                rating: 3.5,
                tag: "sale",
                image: "../../../public/img/06.jpg"
            },
            {
                name: "Webcam with Microphone",
                price: 64.99,
                discounted: null,
                rating: 4.0,
                tag: "featured",
                image: "../../../public/img/07.jpg"
            },
            {
                name: "External Hard Drive",
                price: 89.99,
                discounted: 45.00,
                rating: 4.5,
                tag: "bestseller",
                image: "../../../public/img/08.jpg"
            },
            {
                name: "Gaming Desk",
                price: 179.99,
                discounted: 90.00,
                rating: 4.6,
                tag: "new arrival",
                image: "../../../public/img/09.jpg"
            },
            {
                name: "Wireless Gaming Controller",
                price: 54.99,
                discounted: 27.50,
                rating: 4.2,
                tag: "featured",
                image: "../../../public/img/10.jpg"
            },
                {
                    name: "Gaming Headset",
                    price: 89.99,
                    discounted: 50.00,
                    rating: 4.5,
                    tag: "featured",
                    image: "../../../public/img/11.jpg"
                },
                {
                    name: "Gaming Headset",
                    price: 89.99,
                    discounted: 50.00,
                    rating: 4.5,
                    tag: "featured",
                    image: "../../../public/img/12.jpg"
                },
                {
                    name: "Gaming Headset",
                    price: 89.99,
                    rating: 4.5,
                    tag: "featured",
                    image: "../../../public/img/13.jpg"
                },
                {
                    name: "Gaming Headset",
                    price: 89.99,
                    discounted: 50.00,
                    rating: 4.5,
                    tag: "featured",
                    image: "../../../public/img/14.jpg"
                },
                {
                    name: "Gaming Headset",
                    price: 89.99,
                    discounted: 50.00,
                    rating: 4.5,
                    tag: "featured",
                    image: "../../../public/img/15.jpg"
                },
                {
                    name: "Gaming Headset",
                    price: 89.99,
                    discounted: 50.00,
                    rating: 4.5,
                    tag: "new arrival",
                    image: "../../../public/img/16.jpg"
                },
                {
                    name: "Gaming Headset",
                    price: 89.99,
                    discounted: 50.00,
                    rating: 4.5,
                    tag: "featured",
                    image: "../../../public/img/17.jpg"
                },
                {
                    name: "Gaming Headset",
                    price: 89.99,
                    discounted: 50.00,
                    rating: 4.5,
                    tag: "new arrival",
                    image: "../../../public/img/18.jpg"
                },
            ],
            currentIndex: 0,
        }
    },
    computed: {
        displayedProducts() {
        return this.products.slice(this.currentIndex, this.currentIndex + 4);
        },
    },
    methods: {
        nextSlide() {
            if (this.currentIndex + 4 < this.products.length) {
            this.currentIndex += 4;
            }
        },
    prevSlide() {
            if (this.currentIndex > 0) {
            this.currentIndex -= 4;
            }
        },
    
    getStarClass(index, rating) {
        const roundedRating = Math.round(rating * 2) / 2; 
        return index + 0.5 <= roundedRating ? 'checked' : '';
    },
}
}

</script>

<template>
    <section class="container">
        <!-- First 2 initial images -->
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
        <!-- Special Category section -->
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
                        <a href="/" class="link-offset-3">Shop Now</a>
                    </div>
                </div>

            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 column-gap-5 special-car">
                <div class="card-promo">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/category-image-01-446x550_t.jpg" alt="bayonetta">
                    <div class="special-info">
                        <h4>Bayonetta</h4>
                        <a href="/" class="link-offset-3">Shop Now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 column-gap-5 special-car">
                <div class="card-promo">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/category-image-03-446x550_t.jpg" alt="dark souls">
                    <div class="special-info">
                        <h4>Dark Souls</h4>
                        <a href="/" class="link-offset-3">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Our product section -->
        <div class="home-titles">
            <h1>Our Products</h1>
            <span class="title-divider"></span>
        </div>
        <div class="row prod-container">
            <div v-for="(product, index) in displayedProducts" :key="index" class="col-lg-3 col-md-4 col-sm-6 column-gap-5">
                <img class=" card-promo " :src="product.image" :alt="product.name">
                <div class="product-info">
                    <div class="rating">
                        <span v-for="i in 5" :key="i" :class="['fa', 'fa-star', getStarClass(i, product.rating)]"></span>
                    </div>
                    <div>
                        <h5 class="prod-title"> {{ product.name }}</h5>
                        <div  v-if="product.discounted !== null">
                            <span class="prod-price discounted">{{ product.price }}</span>
                            <span class="prod-discounted-price">{{ product.discounted }}</span>
                        </div>
                        <div v-else>
                            <span class="prod-price">{{ product.price }}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="arrow navigation-button">
                <div class="prev" @click="prevSlide" :disabled="currentIndex === 0"></div>
                <div class="next" @click="nextSlide" :disabled="currentIndex + 1 >= products.length"></div>
            </div>
        </div>
        <!-- sezione frecce (prev. next) -->


        <!-- Second section with the 2 images -->
        <div class="row mt-7">
            <div class="col-lg-6 col-md-12 col-sm-12 mb-5 column-gap-5">
                <div class="card-promo">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-03.jpg" alt="most popular">
                    <div class="card-promo-info">
                        <h3>20% discount</h3>
                        <h3>Dragon's Dogma Video Game</h3>

                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mb-5 column-gap-5">
                <div class="card-promo">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-04.jpg" alt="most popular">
                    <div class="card-promo-info">
                        <h3>30% discount</h3>
                        <h3>World of Tanks New Game</h3>
                    </div>
                </div>
            </div>
        </div>
        <!-- Deal of the day -->
        <div class="home-titles">
            <h1>Deal of the day</h1>
            <span class="title-divider"></span>
        </div>
        <div class="row">
            <div class="col-lg-6 offset-3 col-md-12 col-sm-12">
                <div class="row countdown">
                    <div class="col time-box">
                        <h5>442 days</h5>
                    </div>
                    <div class="col time-box">
                        <h5>13 hours</h5>
                    </div>
                    <div class="col time-box">
                        <h5>31 mins</h5>
                    </div>
                    <div class="col time-box">
                        <h5>30 sec</h5>
                    </div>

                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 column-gap-5">
                <img class=" card-promo " src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/04.jpg" alt="Image container">
                <div class="product-info">
                    <div class="rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div>
                        <h5 class="prod-title"> Shopping Mahjong connect</h5>
                        <span class="prod-price">$100.00</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 column-gap-5">
                <img class=" card-promo " src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/04.jpg" alt="Image container">
                <div class="product-info">
                    <div class="rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div>
                        <h5 class="prod-title"> Shopping Mahjong connect</h5>
                        <span class="prod-price">$100.00</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 column-gap-5">
                <img class=" card-promo " src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/04.jpg" alt="Image container">
                <div class="product-info">
                    <div class="rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div>
                        <h5 class="prod-title"> Shopping Mahjong connect</h5>
                        <span class="prod-price">$100.00</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 column-gap-5">
                <img class=" card-promo " src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/04.jpg" alt="Image container">
                <div class="product-info">
                    <div class="rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div>
                        <h5 class="prod-title"> Shopping Mahjong connect</h5>
                        <span class="prod-price">$100.00</span>
                    </div>
                </div>
            </div>
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
    width: 100%;


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


//products

.product-info {
    width: 100%;
    background-color: #170F1F;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
}
.checked {
    color: #f8a900;
}


.prod-title{
    color: white;
    padding: 1rem;
}

//price 
.prod-price{
    color: #f8a900;
    font-weight: 500;
    padding: 1rem;
}

.prod-price {
    color: #f8a900;
    font-weight: 500;
    padding: 1rem;
}

.discounted {
    text-decoration: line-through;
    color: #342C3D;
}

.prod-discounted-price {
    color: #f8a900; /* You can change the color based on your design */
    font-weight: 500;
    padding: 1rem;
}


//rating
.rating {
    padding: 1rem;
}

//countdown
.countdown {
    margin: 3rem 0;
    

    .time-box {
        color: white;
        padding: 1rem;
        border: solid 1px #342C3D;
        text-align: center;
    }
}

//slider 




    .prod-container {
    position: relative;
    width: 100%;

    .arrow {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        display: none;

    .prev {
        width: 30px;
        height: 30px;
        background-image: url(../../../public/img/arrow.png) ;
        background-position: 0% 100%;
        position: absolute;
        top: 600%;
        bottom: 50%;
        transform: translate(-50%, -50%);
        transition: all 300ms ease;

        &:hover {
            background-image: url(../../../public/img/arrow.png);
            background-position: 0% 0%;
        }
    }

    .next {
        width: 30px;
        height: 30px;
        background-image: url(../../../public/img/arrow.png) ;
        background-position: -59% 100%;
        position: absolute;
        right: 0;
        bottom: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all 300ms ease;

        &:hover {
            background-image: url(../../../public/img/arrow.png) ;
            background-position: 100% 0%;
    
        }
    }
    }

    &:hover .arrow{
        cursor: pointer;
        display: block;
        position: absolute;
    }
}


</style>