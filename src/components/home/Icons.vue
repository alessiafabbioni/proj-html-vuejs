<script>
export default {
    name: 'Icons'
}

</script>

<template>
     <section class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="icon-card hover1">
                    <div class="icon-container icon1"></div>
                    <span class="icon-title">Free Delivery</span>
                    <span class="icon-info">Free Shipping on all orders</span>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="icon-card hover2">
                    <div class="icon-container icon2"></div>
                    <span class="icon-title">Money Return</span>
                    <span class="icon-info">Back Guarantee in 7 days</span>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="icon-card hover3">
                    <div class="icon-container icon3"></div>
                    <span class="icon-title">Member Discount</span>
                    <span class="icon-info">On every order over $130.00</span>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="icon-card hover4">
                    <div class="icon-container icon4">
                    </div>
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
    transition: 0.3s;
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
    transition: 0.3s;
}

.icon4 { 
    background-image: url('public/img/service-icon.png'); 
    background-position: 0% 100%; 
    transition: 0.3s;
}

.icon-title {
    font-weight: 700;
    color: white;
    transition: color 0.5s ease;
}

.icon-info{
    color: #A6A6A6;
}



//Hover rules

.hover1 {
    transition: 0.3s ease;

    &:hover {
        .icon1{
            background-position: 0% 0%;
        }
        .icon-title{
            color: #f8a900;
        }
    }
}

.hover2 {
    transition: 0.3s ease;

    &:hover {
        .icon2{
            background-position: 0% 29%;
        }
        .icon-title{
            color: #f8a900;
        }
    }
}

.hover3 {
    transition: 0.3s ease;

    &:hover {
        .icon3{
            background-position: 0% 58%;
        }
        .icon-title{
            color: #f8a900;
        }
    }
}

.hover4 {
    transition: 0.3s ease;

    &:hover {
        .icon4{
            background-position: 0% 87%;
        }
        .icon-title{
            color: #f8a900;
        }
    }
}

</style>