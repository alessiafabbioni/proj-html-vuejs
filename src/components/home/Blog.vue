<script>
export default {
    name: 'Blog',
    data() {
        return {
        currentIndex: 0,
        posts: [
            {
            img: '../../../public/img/Nisi-ut-aliquid-ex-ea-com.jpg',
            data: 'Jan, 18, 2021',
            comment: '0 Comment',
            text: 'Anyway REPS is a NYC agency repres enting photographers'
            },
            {
            img: '../../../public/img/Architecto-beatae-vitae-dicta.jpg',
            data: 'May, 23, 2021',
            comment: '0 Comment',
            text: 'Nasual risus suscipit Lorem Ipsum is simply text'
            },
            {
            img: '../../../public/img/At-vero-eos-et-accusamus.jpg',
            data: 'Apr, 09, 2021',
            comment: '0 Comment',
            text: 'Nostrum Iesum Christum Lorem Ipsum is simply text'
            },
            // {
            // img: '../../../public/img/Illo-inventore-veritatis-quasi.jpg',
            // data: 'Jan, 25, 2021',
            // comment: '0 Comment',
            // text: 'Nasual risus suscipit Lorem Ipsum is simply text'
            // },
            // {
            // img: '../../../public/img/Consequunt-magni-dolores.jpg',
            // data: 'Mar, 18, 2021',
            // comment: '0 Comment',
            // text: 'Urna risus suscipit Lorem Ipsum is simply text'
            // },
            // {
            // img: '../../../public/img/Blandit-praesen-volupta.jpg',
            // data: 'Oct, 11, 2021',
            // comment: '0 Comment',
            // text: 'Nasual risus suscipit Lorem Ipsum is simply text'
            // },
            // {
            // img: '../../../public/img/Laborum-et-dolor-fuga-Et.jpg',
            // data: 'Jan, 18, 2021',
            // comment: '0 Comment',
            // text: 'Anyway REPS is a NYC agency repres enting photographers'
            // },
            // {
            // img: '../../../public/img/Omnis-iste-natus-error-sit.jpg',
            // data: 'Nov, 23, 2021',
            // comment: '0 Comment',
            // text: 'Urna risus suscipit Lorem Ipsum is simply text'
            // },
            // {
            // img: '../../../public/img/Rerum-facilis-est-et-exped.jpg',
            // data: 'Dic, 30, 2021',
            // comment: '0 Comment',
            // text: 'Nostrum Iesum Christum Lorem Ipsum is simply text'
            // },
        ]
        }
  },
}

</script>

<template>
    <section class="container">
        <div class="home-titles">
            <h1>New Game Blogs</h1>
            <span class="title-divider"></span>
        </div>
        <div class="row pb-5">
            <div class="col-lg-4 col-md-12 col-sm-12 column-gap-2 special-car">
                <div class="card-promo" v-for="(post,i) in posts" :key="i">
                    <img :src=" post.img " alt="Batman">
                    <div class="row">
                        <div class="col-4  mt-3">
                            <i class="fa fa-calendar pe-2"></i>
                            <span> {{ post.data }} </span>
                        </div>
                        <div class="col-4  mt-3 ">
                            <i class="fa fa-comments-o pe-2"></i>
                            <span> {{ post.comment }} </span>
                        </div>
                        <h5> {{ post.text }} </h5>
                    </div>
                </div>
                <div class="arrow">
                    <div class="prev" ></div>
                    <div class="next" ></div>
                </div>
            </div>

            <!-- <div class="col-lg-4 col-md-12 col-sm-12 column-gap-5 special-car">
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
            </div> -->
            <!-- <div class="col-lg-4 col-md-12 col-sm-12 column-gap-5 special-car">
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
            </div> -->
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
        font-size: 14px;
    }
}

.special-car {
    margin: 30px 0;
    display: flex;
   

    width: 100%;
    height: 100%;
    position: relative;

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
        left: 0;
        top: 40%;
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
        top: 40%;
        transform: translate(-50%, -50%);
        transition: all 300ms ease;

        &:hover {
            background-image: url(../../../public/img/arrow.png) ;
            background-position: 100% 0%;
    
        }
      }
    }

    &:hover .arrow {
        cursor: pointer;
        display: block;
    }
}




</style>

<!--  -->