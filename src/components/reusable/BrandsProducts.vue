<script>

export default {
    name: 'BrandsProducts',
    data() {
        return {
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
                }
            ]
        }
    }
}

</script>

<template>
  <div class="container-fluid">
        <div class="container">
            <div class="brands-products">
                <div class="img-brands" v-for="(image,i) in brands" :key="i">
                    <img :src=" image.img " :alt=" image.name ">
                </div>
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

        .brands-products {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        }
    }
}


</style>
