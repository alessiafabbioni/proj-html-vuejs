<script>
export default {
    name: 'AppStore'
}

</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col">
                <div class="icon-card">
                    <div class="icon-container icon1"></div>
                    <span>Free Delivery</span>
                    <span>Free Shipping on all orders</span>
                </div>
            </div>
            <div class="col">
                <div class="icon-card">
                    <div class="icon-container icon1"></div>
                    <span>Free Delivery</span>
                    <span>Free Shipping on all orders</span>
                </div>
            </div>
            <div class="col">
                <div class="icon-card">
                    <div class="icon-container icon1"></div>
                    <span>Free Delivery</span>
                    <span>Free Shipping on all orders</span>
                </div>
            </div>
            <div class="col">
                <div class="icon-card">
                    <div class="icon-container icon1"></div>
                    <span>Free Delivery</span>
                    <span>Free Shipping on all orders</span>
                </div>
            </div>
            

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;

* {
    color: white;
}

.icon-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 30px;
}
.icon-container {
            width: 60px;
            height: 60px;
            background-size: 100% auto;
            background-position: center;
            margin-bottom: 10px; 
        }

        .icon1 { 
            background-image: url('public/img/service-icon.png'); 
            background-position: 0% 13%; 
        }
        .icon2 { background-image: url('logos.jpg'); background-position: 0% 2%; }

</style>