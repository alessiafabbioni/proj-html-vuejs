<script>
export default {
  name: 'BrandsProducts',
  data() {
    return {
      currentIndex: 0,
      brands: [
        {
          img: '../../../public/img/brand-01.png',
          name: 'White Wolfs'
        },
        {
          img: '../../../public/img/brand-02.png',
          name: 'Fighters1'
        },
        {
          img: '../../../public/img/brand-03.png',
          name: 'Tigers'
        },
        {
          img: '../../../public/img/brand-04.png',
          name: 'Rhino'
        },
        {
          img: '../../../public/img/brand-05.png',
          name: 'B2 Jersey'
        },
        {
          img: '../../../public/img/brand-01.png',
          name: 'White Wolfs'
        },
      ]
    }
  },
  computed: {

            displayedBrand() {
                    console.log(this.currentIndex)
                    return this.brands.slice(this.currentIndex, this.currentIndex + this.brands.length -1);

            },

            },
   methods: {

        //funzione per far funzionare lo slider
        nextBrand() {
            if (5 + this.currentIndex < this.brands.length) {
                this.currentIndex += 1;
        
            } else if (5 + this.currentIndex === this.brands.length) {
                this.currentIndex = 0;
            }

            },
        prevBrand() {
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
            }else if (this.currentIndex === 0) {
                this.currentIndex = this.brands.length - this.brands.length -1;
            }
        },
},
}

</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <!-- ciclo delle immagini dei brands -->
      <div class="brands-products" >
        <div class="img-brands" v-for="(image, i) in displayedBrand" :key="i">
          <img :src="image.img" :alt="image.name" />
        </div>
      </div>
      <!-- sezione frecce (prev. next) -->
      <div class="arrow">
        <div class="prev" @click="prevBrand"></div>
        <div class="next" @click="nextBrand" ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;

.container-fluid {
  width: 100%;
  height: 270px;
  background-image: url(../../public/img/body-bg.jpg);

  .container {
    width: 100%;
    height: 100%;
    border-top: 1px solid #353a4ea7;
    position: relative;

    .brands-products {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 50px;
      overflow: hidden;
    }

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
        top: 50%;
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
  }
}

.container:hover .arrow {
  cursor: pointer;
  display: block;
}




</style>

<!-- freccia che guarda a sinistra bianca -->
<!-- background-position: 0% 100%;  

freccia che guarda a sinistra gialla
background-position: 0% 0%;


freccia che guarda a destra bianca -->
<!-- background-position: -59% 100%;  -->

<!-- freccia che guarda a destra gialla
      background-position: 100% 0%; -->

