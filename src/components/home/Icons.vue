<script>
export default {
    name: 'Icons'
}

</script>

<template>
     <section class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="icon-card">
                    <div class="icon-container icon1"></div>
                    <span class="icon-title">Free Delivery</span>
                    <span class="icon-info">Free Shipping on all orders</span>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="icon-card">
                    <div class="icon-container icon2"></div>
                    <span class="icon-title">Money Return</span>
                    <span class="icon-info">Back Guarantee in 7 days</span>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="icon-card">
                    <div class="icon-container icon3"></div>
                    <span class="icon-title">Member Discount</span>
                    <span class="icon-info">On every order over $130.00</span>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="icon-card">
                    <div class="icon-container icon4"></div>
                    <span class="icon-title">Return Policy</span>
                    <span class="icon-info">Support 24 hours a day</span>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;


.icon-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
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
    background-position: 0% 12%; 
}

.icon2 { 
    background-image: url('public/img/service-icon.png'); 
    background-position: 0% 42%; 
}

.icon3 { 
    background-image: url('public/img/service-icon.png'); 
    background-position: 0% 71%; 
}

.icon4 { 
    background-image: url('public/img/service-icon.png'); 
    background-position: 0% 100%; 
}

.icon-title {
    font-weight: 700;
    color: white;
}

.icon-info{
    color: #A6A6A6;
}




</style>