<script>
//importo store
import { store } from '/src/store.js'

export default {
    name: 'AppStore',
    data(){

        return {
            store: {
                products: store.products,
                filteredProducts: [],
                discountedProducts: [],
            },
            currentIndex: 0,
        };
    },
    computed: {

        displayedProducts() {
        return this.store.filteredProducts.slice(this.currentIndex, this.currentIndex + 4);
        },
    },
    methods: {

        //funzione per far funzionare lo slider
        nextSlide() {
        if (this.currentIndex + 4 < this.store.filteredProducts.length) {
        this.currentIndex += 4;
        } else {
        // Check if there are no more filtered products
        if (this.store.filteredProducts.length === 0) {
        // If no more filtered products, switch to 'featured'
        this.setDefaultFilter();
        } else {
        // If there are still filtered products, reset the index
        this.currentIndex = 0;
        }
        }
        },



        prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex -= 4;
        }
        },



        //funzione per orchestrare i rating dei prodotti
        getStarClass(index, rating) {
        const roundedRating = Math.round(rating * 2) / 2;
        return index + 0.5 <= roundedRating ? 'checked' : '';
        },



        //funzinone per filtrare i prodotti
        filterProducts(category) {
        console.log("Filtering products by category:", category);
        console.log("All products:", this.store.products);
        
        const filteredProducts = this.store.products.filter((product) => {
        return product.tag.includes(category.toLowerCase());
        });

        console.log("Filtered products:", filteredProducts);

        this.store.filteredProducts = filteredProducts;
        this.currentIndex = 0;
        },



        //impostazioni di filtro di default
        setDefaultFilter() {
        this.filterProducts('featured');
        },



        //calcolo dello sconto sul prodotto
        calculateDiscountPercentage(originalPrice, discountedPrice) {
        const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
        return discountPercentage.toFixed(2);
        },


        //transizione con immagine randomica
        handleHover(index) {
        
            // Save the original image URL before updating
            this.store.filteredProducts[index].originalImage = this.store.filteredProducts[index].image;

            // Generate a random index to select a different image from the array
            const randomIndex = Math.floor(Math.random() * this.store.products.length);

            // Update the image of the product at the specified index
            this.store.filteredProducts[index].image = this.store.products[randomIndex].image;
            },

        handleLeave(index) {
        
            // Reset the image to the original one when leaving the hover
            this.store.filteredProducts[index].image = this.store.filteredProducts[index].originalImage;

    
        },
        },

    mounted() {
        this.setDefaultFilter();
    },
}



</script>

<template>
    <section class="container">
        <!-- First 2 initial images -->
        <div class="row mt-7">
            <div class="col-lg-6 col-md-12 col-sm-12 mb-5 column-gap-5">
                <div class="card-promo zoom">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-01.jpg" alt="most popular">
                    <div class="card-promo-info">
                        <h3>Most Popular</h3>
                        <h3>The Battlefield 4 Naval Strike</h3>

                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mb-5 column-gap-5">
                <div class="card-promo zoom">
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
        <!-- <div class="row">
            <div class="col-lg-6 offset-3 col-md-12 col-sm-12"> -->
                <div class="row countdown">
                    <div class="col"></div>
                    <div class="col time-box" @click="filterProducts('new arrival')">
                        <h5>New Arrival</h5>
                    </div>
                    <div class="col time-box" @click="filterProducts('featured')">
                        <h5>Featured</h5>
                    </div>
                    <div class="col time-box" @click="filterProducts('bestseller')">
                        <h5>Best Sellers</h5>
                    </div>
                    <div class="col"></div>
                </div>
            <!-- </div>
        </div> -->
        <div class="row prod-container">
                <div v-for="(product, index) in displayedProducts" :key="index" class="col-lg-3 col-md-4 col-sm-6 column-gap-5">
                    <div class="discount-card" @mouseover="handleHover(index)" @mouseleave="handleLeave(index)">
                        <img class=" card-promo " :src="product.image" :alt="product.name">
                        <div class="discount-flag" v-if="product.discounted !== null">
                            <span>{{ calculateDiscountPercentage(product.price, product.discounted) }}% off</span>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="rating">
                            <span v-for="i in 5" :key="i" :class="['fa', 'fa-star', getStarClass(i, product.rating)]"></span>
                        </div>
                        <div>
                            <h5 class="prod-title"> {{ product.name }}</h5>
                            <div  v-if="product.discounted !== null">
                                <span class="prod-price discounted">$ {{ product.price }}</span>
                                <span class="prod-discounted-price">$ {{ product.discounted }}</span>
                            </div>
                            <div v-else>
                                <span class="prod-price">$ {{ product.price }}</span>
                            </div>
                        </div>
                        <div class="icon-slider row">
                            <div class="col">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </div>
                            <div class="col">
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <div class="col">
                                <i class="fa-solid fa-maximize"></i>
                            </div>
                            <div class="col">
                                <i class="fa-solid fa-eye"></i>
                            </div>
                        </div>
                    </div>
                </div>        
             <!-- sezione frecce (prev. next) -->
            <div class="arrow navigation-button">
                <div class="prev" @click="prevSlide" :disabled="currentIndex === 0"></div>
                <div class="next" @click="nextSlide" :disabled="currentIndex + 1 >= store.filteredProducts.length"></div>
            </div>
        </div>   



        <!-- Second section with the 2 images -->
        <div class="row mt-7">
            <div class="col-lg-6 col-md-12 col-sm-12 mb-5 column-gap-5">
                <div class="card-promo zoom">
                    <img src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-03.jpg" alt="most popular">
                    <div class="card-promo-info">
                        <h3>20% discount</h3>
                        <h3>Dragon's Dogma Video Game</h3>

                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mb-5 column-gap-5">
                <div class="card-promo zoom">
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
        <!-- <div class="row">
            <div class="col-lg-6 offset-3 col-md-12 col-sm-12"> -->
                <div class="row countdown">
                    <div class="col"></div>
                    <div class="col time-box">
                        <h5>0 days</h5>
                    </div>
                    <div class="col time-box">
                        <h5>0 hours</h5>
                    </div>
                    <div class="col time-box">
                        <h5>0 mins</h5>
                    </div>
                    <div class="col time-box">
                        <h5>0 sec</h5>
                    </div>
                    <div class="col"></div>

                </div>

            <!-- </div>
        </div> -->
        <div class="row prod-container">
                <div v-for="(product, index) in displayedProducts" :key="index" class="col-lg-3 col-md-4 col-sm-6 column-gap-5">
                    <div class="discount-card" @mouseover="handleHover(index)" @mouseleave="handleLeave(index)">
                        <img class=" card-promo " :src="product.image" :alt="product.name">
                        <div class="discount-flag" v-if="product.discounted !== null">
                            <span>{{ calculateDiscountPercentage(product.price, product.discounted) }}% off</span>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="rating">
                            <span v-for="i in 5" :key="i" :class="['fa', 'fa-star', getStarClass(i, product.rating)]"></span>
                        </div>
                        <div>
                            <h5 class="prod-title"> {{ product.name }}</h5>
                            <div  v-if="product.discounted !== null">
                                <span class="prod-price discounted">$ {{ product.price }}</span>
                                <span class="prod-discounted-price">$ {{ product.discounted }}</span>
                            </div>
                            <div v-else>
                                <span class="prod-price">$ {{ product.price }}</span>
                            </div>
                        </div>
                    </div>
                </div>        
            <!-- sezione frecce (prev. next) -->
            <div class="arrow navigation-button">
                <div class="prev" @click="prevSlide" :disabled="currentIndex === 0"></div>
                <div class="next" @click="nextSlide" :disabled="currentIndex + 1 >= store.filteredProducts.length"></div>
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

    
    img {
        width: 100%;
    }

    &:hover .special-info{
        background-color: black;
    }


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
        border-radius: 12px;
        padding: 10px;
        text-align: center;
    }

    h3 {
        color: white;
        font-weight: 600;
        text-align: center;
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
    transition: 0.3s ease;

    h4 {
        color: white;
        padding: 5px 20px;
        margin-top: 10px;
    }

    a {
        color: #f8a900;
        padding: 0 20px;
        transition: 1s ease;

        &:hover {
            text-decoration: none;
            cursor: pointer;
            transition: 1s;
        }


    }
}


//products

.product-info {
    width: 100%;
    max-height: 100%;
    background-color: #170F1F;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    position: relative;

    //slider icone

    .icon-slider {
        color: white;
        position: absolute;
        bottom: 0;
        left: 12px;
        text-align: center;
        width: 100%;
        border: solid 1px #342C3D;
        padding: 1rem;
        background-color: #170F1F;
        display: none;
        transition: transform 2s ease-in-out;
    }

    &:hover .icon-slider{
        transform: translateY(0);
        display: flex;
        flex-direction: row;
        cursor: pointer;
    }

    i:hover {
        color: #f8a900;
    }
}
.checked {
    color: #f8a900;
}


.prod-title{
    color: white;
    padding: 1rem;
    white-space: nowrap;
    overflow: hidden;            
    text-overflow: ellipsis; 
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

        &:hover {
            color: #f8a900;
            cursor: pointer;
            border: solid 1px #f8a900;
        }
    }
}






    .prod-container {
    position: relative;
    width: 100%;
    margin-bottom: 3rem;

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
        right: -4284%;
        bottom: 50%;
        top: 600%;
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

//Discount flag

.discount-card {
    position: relative;

    .discount-flag {
        position: absolute;
        top: 5%;
        right: 5%;
        background-color: #f8a900;
        color: #170F1F;
        padding: 10px;
        border-radius: 12px;
    }
}



//pic zoom

.zoom {
    img {
    transition: transform 0.8s;
    }

    &:hover img {
    transform: scale(1.5);
    transition: transform 5s; 
    }
}



</style>